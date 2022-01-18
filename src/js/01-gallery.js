import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const createGalleryItemEl = ({ preview, original, description } = {}) => {
    return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`
};

const getGalleryItemEl = galleryItems.map(el => {
    return createGalleryItemEl(el);
});

galleryEl.insertAdjacentHTML('afterBegin', getGalleryItemEl.join(''));

let lightbox = new SimpleLightbox('.gallery a', { captionDelay:250, captionType: 'attr', captions: true, captionPosition: 'bottom', captionSelector: 'img', captionsData: 'alt' });

galleryEl.addEventListener('click', event => {
   event.preventDefault();
   
    if (event.target.nodeName !== 'IMG') {
    return;
    };
});