import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const items = galleryItems
    .map((galleryItem) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
            <img
              class="gallery__image"
              src="${galleryItem.preview}"
              data-source="${galleryItem.original}"
              alt="${galleryItem.description}"
            />
        </a>
    </div>`)
    .join("");
gallery.insertAdjacentHTML("afterbegin",items);
console.log(items);

const images = document.querySelectorAll(".gallery__image");
console.log(images);

images.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const modal = basicLightbox.create(`
            <img src="${item.dataset.source}" alt="${item.alt}">
        `)

        modal.show()
    })
});