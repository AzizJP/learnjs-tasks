'use strict';

const images = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

images.onclick = evt => {
  evt.preventDefault();

  const image = evt.target.closest('a');
  if (!image) return;

  largeImage.src = image.href;
  largeImage.alt = image.title;
};
