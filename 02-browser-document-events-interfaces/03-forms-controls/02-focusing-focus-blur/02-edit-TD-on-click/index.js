'use strict';

const table = document.getElementById('bagua-table');
let editingCell;

table.onclick = evt => {
  const target = evt.target.closest('.buttons__cancel,.buttons__save,td');

  if (!table.contains(target)) return;

  if (target.className === 'buttons__cancel') {
    finishCellEdit(editingCell.elem, false);
  } else if (target.className === 'buttons__save') {
    finishCellEdit(editingCell.elem, true);
  } else if (target.nodeName === 'TD') {
    if (editingCell) return;

    makeCellEditable(target);
  }
};

const makeCellEditable = cell => {
  editingCell = {
    elem: cell,
    data: cell.innerHTML,
  };

  cell.classList.add('cell');

  const textArea = document.createElement('textarea');
  textArea.style.width = `${cell.clientWidth}px`;
  textArea.style.height = `${cell.clientHeight}px`;
  textArea.classList.add('cell__area');

  textArea.value = cell.innerHTML;
  cell.innerHTML = '';
  cell.appendChild(textArea);
  textArea.focus();

  cell.insertAdjacentHTML(
    'beforeEnd',
    '<div class="buttons"><button class="buttons__save">OK</button><button class="buttons__cancel">CANCEL</button></div>'
  );
};

const finishCellEdit = (cell, isSave) => {
  if (isSave) {
    cell.innerHTML = cell.firstChild.value;
  } else {
    cell.innerHTML = editingCell.data;
  }
  cell.classList.remove('cell');
  editingCell = null;
};
