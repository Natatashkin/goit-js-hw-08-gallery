import images from "./gallery-items.js";

// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.Превью результата посмотри по ссылке.

// Разбей задание на несколько подзадач:

// 1. Создание и рендер разметки по массиву данных и предоставленному шаблону.
// 2. Реализация делегирования на галерее ul.js - gallery и получение url большого изображения.
// 3. Открытие модального окна по клику на элементе галереи.
// 4. Подмена значения атрибута src элемента img.lightbox__image.
// 5. Закрытие модального окна по клику на кнопку button[data - action= "close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data - атрибуте source на элементе img, и указываться в href ссылки(это необходимо для доступности).

// < li class="gallery__item" >
//     <a
//         class="gallery__link"
//         href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//     >
//         <img
//             class="gallery__image"
//             src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//             data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//             alt="Tulips"
//         />
//     </a>
// </li >
//     Дополнительно
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

const galleryRef = document.querySelector(".js-gallery");
const lightboxRef = document.querySelector(".js-lightbox");
const lightboxOverlay = document.querySelector(".lightbox__overlay");
const lightboxImageRef = document.querySelector(".lightbox__image");
const lightBoxCloseBtn = document.querySelector(
  '[data-action="close-lightbox"]'
);

const galleryLits = createListItem(images);
galleryRef.insertAdjacentHTML('beforeend', galleryLits);

// galleryRef.addEventListener("click", onImageClick);
galleryRef.addEventListener("click", onModalOpen);
lightboxOverlay.addEventListener("click", onCloseLightboxByClick);
lightBoxCloseBtn.addEventListener("click", onCloseModal);

function createListItem (galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image"
          src="${preview}" 
          data-source="${original}" 
          alt="${description}"/>
      </a>
    </li >
    `
  }).join("");
};

function onImageClick(event) {
  event.preventDefault();
  return event.target.dataset.source;
}


function onModalOpen(event) {
  event.preventDefault();
  window.addEventListener("keydown", onCloseModalByEsc);
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const currentActiveImage = document.querySelector(".is-open");
  if (currentActiveImage) {
    lightboxRef.classList.remove("is-open");
  }

  lightboxRef.classList.add("is-open");
  onChangeLightboxImageUrl(event);
}
 
function onChangeLightboxImageUrl(event) {
  if (lightboxRef.classList.contains("is-open")) {
    lightboxImageRef.src = onImageClick(event);
    lightboxImageRef.alt = event.target.alt;
  }
}

function onCloseModal() {
  window.removeEventListener("keydown", onCloseModalByEsc);
  lightboxRef.classList.remove("is-open");
  onClearlightboxImageRef();
}

function onCloseModalByEsc(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}

function onCloseLightboxByClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onClearlightboxImageRef() {
  lightboxImageRef.removeAttribute("src");
  lightboxImageRef.removeAttribute("alt");
}

