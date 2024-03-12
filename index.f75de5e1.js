"use strict";
// const gallery = document.querySelector('.gallery');
// const largeImage = gallery.querySelector('#largeImg');
// gallery.addEventListener('click', (clickEvent) => {
//   if (
//     clickEvent.target.classList.contains('gallery__img') ||
//     clickEvent.target.classList.contains('list-item__link')
//   ) {
//     clickEvent.preventDefault();
//     const imageUrl = clickEvent.target.closest('.list-item__link').href;
//     largeImage.src = imageUrl;
//   }
// });
const gallery = document.querySelector(".gallery");
const largeImage = gallery.querySelector("#largeImg");
gallery.addEventListener("click", (clickEvent)=>{
    const isGalleryImage = clickEvent.target.classList.contains("gallery__img");
    const isListItemLink = clickEvent.target.classList.contains("list-item__link");
    if (isGalleryImage || isListItemLink) {
        clickEvent.preventDefault();
        const imageUrl = clickEvent.target.closest(".list-item__link").href;
        largeImage.src = imageUrl;
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
