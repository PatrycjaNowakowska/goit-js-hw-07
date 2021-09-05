import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryLightbox = document.querySelector(".gallery");

const items = galleryItems
    .map((galleryItem) =>
        `<a class="gallery__item" href="${galleryItem.original}">
        <img
            class="gallery__image"
            src="${galleryItem.preview}"
            alt="${galleryItem.description}"
        />
        </a>`
    )
    .join("");
galleryLightbox.insertAdjacentHTML("afterbegin",items);
console.log(items);

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
console.log(lightbox);