'use strict';

const button = document.getElementById('hider');

const hideButton = element => {
  element.style.display = 'none';
};

button.addEventListener('click', () => hideButton(button));
