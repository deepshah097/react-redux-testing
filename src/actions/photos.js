import { getAllPhoto, getPhoto, getAllComments } from "../Services/PhotoService";

export const getAllPhotos = () => (dispatch) => {
  dispatch({
    type: 'GET_PHOTOS_REQUEST'
  });
  return getAllPhoto().then(response => {
    return dispatch({
      type: 'GET_PHOTOS_SUCCESS',
      data: response.data
    });
  });
}

export const setSelectedPhotoDetail = data => dispatch => {
  dispatch({
    type: 'SET_SELECTED_PHOTO_DETAIL',
    photo: data
  })
  return getAllComments(data.code).then(response => {
    return dispatch({
      type: 'SET_SELECTED_PHOTO_COMMENTS',
      comments: response.data
    })
  })
}

export const updateSelectedPhotoDetail = (code) => dispatch => {
  getPhoto(code).then(response => {
    return dispatch({
      type: 'UPDATE_SELECTED_PHOTO_DETAIL',
      photo: response
    })
  })
  return getAllComments(code).then(response => {
    return dispatch({
      type: 'UPDATE_SELECTED_PHOTO_COMMENTS',
      comments: response.data
    })
  })
}