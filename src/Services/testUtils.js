import React from 'react';
import {
  render
} from 'react-testing-library';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history'
import thunk from 'redux-thunk';



export function renderwithRedux(
  ui, {
    initialState,
    reducer
  } = {},

) {
  const store = createStore(reducer, initialState, applyMiddleware(thunk))
  return {
    ...render(
      <Provider store={store}>{ ui }</Provider>),
      store
    }
  }


  export function renderWithRouter(
    ui,
    {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
  ) {
    return {
      ...render(<Router history={history}>{ui}</Router>),
      // adding `history` to the returned utilities to allow us
      // to reference it in our tests (just try to avoid using
      // this to test implementation details).
      history,
    }
  }

  export function renderWithReduxRouter(ui,
    { initialState , reducer } = {},
    {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {}){
      const store = createStore(reducer, initialState, applyMiddleware(thunk))
      return {
        ...render(
          <Provider store={store}>
            <Router history={history}>{ ui }</Router>
          </Provider>),
          store
        }
    }