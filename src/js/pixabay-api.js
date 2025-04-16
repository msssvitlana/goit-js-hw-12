import axios from 'axios';
import iziToast from 'izitoast';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49671136-929ec105133e7206b410421f8';
export async function getImagesByQuery(query, page) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Помилка при завантаженні даних:', error.message);
    iziToast.warning({
      title: '',
      message: 'Помилка при завантаженні даних',
      position: 'topRight',
    });
  }
}
