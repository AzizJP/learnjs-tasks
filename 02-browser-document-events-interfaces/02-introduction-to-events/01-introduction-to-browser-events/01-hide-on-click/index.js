'use strict';

const button = document.getElementById('hider');
const text = document.getElementById('text');

const hideText = element => {
  element.style.display = 'none';
};

button.addEventListener('click', () => hideText(text));
