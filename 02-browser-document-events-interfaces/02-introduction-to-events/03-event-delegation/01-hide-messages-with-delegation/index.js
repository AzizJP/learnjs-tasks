'use strict';

const container = document.getElementById('container');

container.onclick = evt => {
  if (evt.target.className !== 'remove-button') return;
  evt.target.closest('.pane').remove();
};
