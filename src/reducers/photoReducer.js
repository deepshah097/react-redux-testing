const initState = {
  photos: [],
  selectedPhoto: {
    photo: {},
    comments: []
  }

}
const photoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_PHOTOS_SUCCESS':
      return {
        ...state,
        photos: action.data
      }
    case 'SET_SELECTED_PHOTO_DETAIL':
      return {
        ...state,
        selectedPhoto: {
          ...state.selectedPhoto,
          photo: action.photo,
        }
      };
    case 'SET_SELECTED_PHOTO_COMMENTS':
      return {
        ...state,
        selectedPhoto: {
          ...state.selectedPhoto,
          comments: action.comments,
        }
      };
    case 'UPDATE_SELECTED_PHOTO_COMMENTS':
      return {
        ...state,
        selectedPhoto: {
          ...state.selectedPhoto,
          comments: action.comments
        }
      };
    case 'UPDATE_SELECTED_PHOTO_DETAIL':
      return {
        ...state,
        selectedPhoto: {
          ...state.selectedPhoto,
          photo: action.photo
        }
      }
    default:
      return state;
  }
}
export default photoReducer;