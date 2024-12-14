import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from './js/pixibay-api';
import { createMarkup } from './js/render-functions';

const formSearch = document.querySelector('.js-search');
const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';
formSearch.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  listImages.innerHTML = '';
  loader.style.display = 'block';

  const inputValue = event.target.elements.search.value.trim();
  if (!inputValue) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid search query.',
    });
    loader.style.display = 'none';
    return;
  }

  fetchImages(inputValue)
    .then(data => {
      loader.style.display = 'none';

      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      listImages.innerHTML = createMarkup(data.hits);

      const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();

      formSearch.reset();
    })
    .catch((err) => {
      loader.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: `Something went wrong: ${err.message}`,
      });
      console.error(err);
    });
}