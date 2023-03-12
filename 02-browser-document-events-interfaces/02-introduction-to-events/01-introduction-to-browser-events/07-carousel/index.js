'use strict';

// отметить картинки для удобства разработки
// этот код может быть удалён по вашему усмотрению
let i = 1;
for (let li of document.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML(
    'beforeend',
    `<span style="position:absolute;left:0;top:0">${i}</span>`
  );
  i++;
}

// ...ваш код, который сделает карусель рабочей

const carousel = document.querySelector('.carousel');
const list = carousel.querySelector('ul');
const listElements = carousel.querySelectorAll('li');
const leftButton = carousel.querySelector('.arrow_left');
const rightButton = carousel.querySelector('.arrow_right');

const width = 130;
const numberOfVisibleEmoji = 3;
let padding = 0;
const maxPadding = 0;
const minPadding = -(width * (listElements.length - numberOfVisibleEmoji));

rightButton.onclick = () => {
  padding -= width * numberOfVisibleEmoji;
  if (padding < minPadding) padding = minPadding;
  list.style.marginLeft = `${padding}px`;
};

leftButton.onclick = () => {
  padding += width * numberOfVisibleEmoji;
  if (padding > maxPadding) padding = maxPadding;
  list.style.marginLeft = `${padding}px`;
};
