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
var e=document.querySelector(".gallery"),t=e.querySelector("#largeImg");e.addEventListener("click",function(e){var r=e.target.classList.contains("gallery__img"),l=e.target.classList.contains("list-item__link");if(r||l){e.preventDefault();var a=e.target.closest(".list-item__link").href;t.src=a}});//# sourceMappingURL=index.6b10b66e.js.map

//# sourceMappingURL=index.6b10b66e.js.map
