'use strict';

const view = document.getElementById('view');
let textArea = null;

view.onclick = () => {
  textArea = document.createElement('textarea');
  textArea.classList.add('edit');
  textArea.value = view.textContent;

  textArea.onkeydown = evt => {
    if (evt.key === 'Enter') {
      textArea.blur();
    }
  };

  textArea.onblur = () => {
    view.textContent = textArea.value;
    textArea.replaceWith(view);
  };

  view.replaceWith(textArea);
  textArea.focus();
};
