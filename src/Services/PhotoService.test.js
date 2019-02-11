import {
  getAllPhoto,
  getPhoto,
  getAllComments
} from './PhotoService'

import axios from 'axios';

test('should fetch Photos', async () => {
  const photos = [{
    code: 1
  }]
  axios.get = jest.fn(() => photos)
  const result = await getAllPhoto();
  expect(result).toEqual(photos)
});

test('should return requested photo', async () => {
  const requestedPhotoCode = 2;
  const photos = [{
    code: 1
  }, {
    code: 2
  }]
  axios.get = jest.fn(() => ({
    data: photos
  }))
  const result = await getPhoto(requestedPhotoCode);
  expect(result).toEqual({
    code: 2
  })
});

test('should return selected photo comments', async () => {
  const resquestedphotocode = 1;
  const comments =[{
    code: 1,
    text: 'hello'
  },{
    code: 2,
    text: 'hello'
  }]
  axios.get = jest.fn(() => ({
    data: comments
  }))
  const result = await getAllComments(resquestedphotocode);
  expect(result.data[0].text).toBe('hello');
  // expect(result.data).toBe(comments);
})