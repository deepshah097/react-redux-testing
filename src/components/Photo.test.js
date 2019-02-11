import 'jest-dom/extend-expect'
import React from 'react';
import Photo from './Photo'
import { renderwithRedux } from '../Services/testUtils'
import photoReducer from '../reducers/photoReducer';



test('Photo testing',()=>{
  const props = { match: { params: { code: 123 } } };
  const { getByTestId } = renderwithRedux(<Photo {...props} />,  { initialState: {
      photos: [],
      selectedPhoto: {
        photo: {
          code: 123,
          display_src: 'http://hello.jpg',
          caption: 'hello'
        },
        comments: []
      } 
    },
    reducer: photoReducer
  })
  expect(getByTestId('display_src').src).toContain('http://hello.jpg')
  expect(getByTestId('caption')).toHaveTextContent('hello')
  
})

