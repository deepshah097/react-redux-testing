import 'jest-dom/extend-expect'
import React from 'react';
import DefaultImages from './DefaultImages'
import { renderWithReduxRouter } from '../Services/testUtils'
import photoReducer from '../reducers/photoReducer';
import { fireEvent } from 'react-testing-library';
import { setSelectedPhotoDetail } from './DefaultImages'


test('Default component testing', () => {
  const result = renderWithReduxRouter(<DefaultImages />, {
    initialState: {
      photos: [{
        code: '123',
        caption: 'hello',
        display_src: 'http://hello.jsp'
      }, {
        code: '124',
        caption: 'world',
        display_src: 'http://world.jsp'
      }],
      selectedPhoto: {
        photo: {},
        comments: []
      } 
    },
    reducer: photoReducer
  }, '/')

  // jest.spyOn(store, 'dispatch');
  // console.log(result)
  
  const image = result.getByTestId('test-image-123');
  console.log(image)
  // fireEvent.click(image);
  // expect(setSelectedPhotoDetail).toHaveBeenCalledTimes(1)
  
})