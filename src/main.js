import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  refreshLightbox,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const galleryContainer = document.querySelector('.gallery');

const input = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const query = input.value.trim();

  if (query.length === 0) {
    iziToast.error({
      title: '❌',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }
  showLoader();
  clearGallery();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No Results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      galleryContainer.insertAdjacentHTML(
        'beforeend',
        createGallery(data.hits)
      );
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Try again later 😥',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      refreshLightbox();
      form.reset();
    });
}
