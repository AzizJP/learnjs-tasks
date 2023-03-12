'use strict';

const buttonClassName = 'button';
const arrowClassName = `${buttonClassName}__arrow`;
const openedArrowClassName = `${arrowClassName}_opened`;
const listClassName = 'list';
const openedListClassName = `${listClassName}_opened`;

const button = document.querySelector(`.${buttonClassName}`);
const arrow = button.querySelector(`.${arrowClassName}`);
const list = document.querySelector(`.${listClassName}`);

const showList = () => {
  if (arrow.classList.contains(openedArrowClassName)) {
    arrow.classList.remove(openedArrowClassName);
  } else {
    arrow.classList.add(openedArrowClassName);
  }

  if (list.classList.contains(openedListClassName)) {
    list.classList.remove(openedListClassName);
  } else {
    list.classList.add(openedListClassName);
  }
};

button.addEventListener('click', showList);
