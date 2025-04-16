import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export { createGallery, clearGallery, showLoader, hideLoader, refreshLightbox };

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('#loader');

const lightbox = new SimpleLightbox('.gallery a');

function createGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        tags,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
        <div class='photo-container'>
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags} width='360'" />
          </a>
          <div class="image-info">
            <p class="image-info-text"><strong>Likes</strong> ${likes}</p>
            <p class="image-info-text"><strong>Views</strong> ${views}</p>
            <p class="image-info-text"><strong>Comments</strong> ${comments}</p>
            <p class="image-info-text"><strong>Downloads</strong> ${downloads}</p>
          </div>
        </li>
        
        </div>`
    )
    .join('');
}

function clearGallery() {
  galleryContainer.innerHTML = '';
}

function showLoader() {
  loader.classList.remove('visually-hidden');
  console.log('showLoader');
}

function hideLoader() {
  loader.classList.add('visually-hidden');
  console.log('hideLoader');
}
function refreshLightbox() {
  lightbox.refresh();
}
