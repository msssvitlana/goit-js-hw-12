import axios from 'axios';

export { getImagesByQuery };

function getImagesByQuery(query) {
  const API_KEY = '49671136-929ec105133e7206b410421f8';
  return axios('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log('Помилка при завантаженні даних:', error);
    });
}
