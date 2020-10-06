import images from "./gallery-items.js";
console.log(images);

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
// galleryRef.classList.add(".gallery");
console.log(galleryRef);

galleryRef.addEventListener("click", () => {});

const createListItem = ({ preview, original, description }) => {
  const listItemLink = document.createElement("a");
  listItemLink.classList.add("gallery__link");
  listItemLink.href = original;
  console.log(listItemLink);

  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const listItemImg = document.createElement("img");
  listItemImg.classList.add("gallery__image");
  listItemImg.src = preview;
  listItemImg.alt = description;
  listItemImg.dataset.sourse = original;

  listItem.appendChild(listItemImg);
  listItemLink.appendChild(listItem);
  return listItemLink;
};

const galleryItems = images.map(createListItem);
// console.log(galleryItems);
galleryRef.append(...galleryItems);
