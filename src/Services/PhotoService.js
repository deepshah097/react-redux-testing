import Axios from 'axios';


export const getAllPhoto = async () => {
  const res = await Axios.get('http://localhost:8080/api/photos');
  return res;
};

export const getPhoto = async (code = false) => {
  const res = await getAllPhoto();
  return res.data.find(photo => photo.code === code);
};

export const getAllComments = async (code) => {
  const res = await Axios.get('http://localhost:8080/api/comments/' + code);
  return res;
};


