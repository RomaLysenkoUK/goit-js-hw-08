// Добавь библиотеку SimpleLightbox как зависимость проекта используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
// Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).
// Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.

// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const list = document.querySelector('.gallery');
const newImg = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
        data-source="${image.original}"                      
      alt="${image.description}"
    />
  </a>`
  )
  .join('');

list.insertAdjacentHTML('beforeend', newImg);
const lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionDelay: 250,
  captionsData: 'alt',
});
console.log(galleryItems);
