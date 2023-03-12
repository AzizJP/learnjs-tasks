'use strict';

const removeButton = '<button class="remove-button">[x]</button>';

const panes = document.querySelectorAll('.pane');
panes.forEach(pane => {
  pane.insertAdjacentHTML('afterbegin', removeButton);

  const button = pane.firstChild;
  button.addEventListener('click', () => pane.remove());
});
