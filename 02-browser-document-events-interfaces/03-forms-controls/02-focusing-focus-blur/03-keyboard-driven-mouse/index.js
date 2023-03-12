'use strict';

const mouse = document.getElementById('mouse');
const mouseWidth = mouse.offsetWidth;
const mouseHeight = mouse.offsetHeight;
mouse.tabIndex = 0;

const takeMouseControl = () => {
  mouse.style.position = 'absolute';
  mouse.style.top = `${mouse.getBoundingClientRect().top}px`;
  mouse.style.left = `${mouse.getBoundingClientRect().left}px`;
};

mouse.onfocus = takeMouseControl();

mouse.onkeydown = evt => {
  switch (evt.key) {
    case 'ArrowUp':
      mouse.style.top = parseInt(mouse.style.top) - mouseHeight + 'px';
      return false;
    case 'ArrowRight':
      mouse.style.left = parseInt(mouse.style.left) + mouseWidth + 'px';
      return false;
    case 'ArrowDown':
      mouse.style.top = parseInt(mouse.style.top) + mouseHeight + 'px';
      return false;
    case 'ArrowLeft':
      mouse.style.left = parseInt(mouse.style.left) - mouseWidth + 'px';
      return false;
  }
};
