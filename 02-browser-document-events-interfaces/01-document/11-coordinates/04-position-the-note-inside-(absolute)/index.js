'use strict';

/**
 * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
 *
 * @param {Node} anchor     элемент, около которого позиционируется другой элемент
 * @param {string} position одно из: top/right/bottom
 * @param {Node} elem       элемент, который позиционируется
 *
 * Оба элемента elem и anchor должны присутствовать в документе
 */

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

function positionAt(anchor, position, elem) {
  const anchorCoords = getCoords(anchor);

  if (!position) return;

  if (position === 'top-out') {
    elem.style.left = `${anchorCoords.left}px`;
    elem.style.top = `${anchorCoords.top - elem.offsetHeight}px`;
  }

  if (position === 'right-out') {
    elem.style.left = `${anchorCoords.left + anchor.offsetWidth}px`;
    elem.style.top = `${anchorCoords.top}px`;
  }

  if (position === 'bottom-out') {
    elem.style.left = `${anchorCoords.left}px`;
    elem.style.top = `${anchorCoords.top + anchor.offsetHeight}px`;
  }

  if (position === 'top-in') {
    elem.style.left = `${anchorCoords.left}px`;
    elem.style.top = `${anchorCoords.top}px`;
  }

  if (position === 'right-in') {
    elem.style.left = `${
      anchorCoords.left + anchor.offsetWidth - elem.offsetWidth
    }px`;
    elem.style.top = `${anchorCoords.top}px`;
  }

  if (position === 'bottom-in') {
    elem.style.left = `${anchorCoords.left}px`;
    elem.style.top = `${
      anchorCoords.top + anchor.offsetHeight - elem.offsetHeight
    }px`;
  }
}

/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
 */
function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, 'top-out', 'note top-out');
showNote(blockquote, 'right-out', 'note right-out');
showNote(blockquote, 'bottom-out', 'note bottom-out');

showNote(blockquote, 'top-in', 'note top-in');
showNote(blockquote, 'right-in', 'note right-in');
showNote(blockquote, 'bottom-in', 'note bottom-in');
