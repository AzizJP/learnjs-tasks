'use strict';

const grid = document.getElementById('grid');

grid.onclick = evt => {
  const eventTarget = evt.target;
  if (eventTarget.tagName === 'TH') {
    sortColumn(eventTarget.cellIndex, eventTarget.dataset.type);
  }
};

const sortColumn = (colNum, type) => {
  const tbody = grid.querySelector('tbody');
  const rows = Array.from(tbody.rows);

  const compare = (a, b) => {
    if (type === 'number') {
      return a.cells[colNum].innerHTML - b.cells[colNum].innerHTML;
    }
    if (type === 'string') {
      return a.cells[colNum].innerHTML > b.cells[colNum].innerHTML ? 1 : -1;
    }
  };

  rows.sort(compare);

  tbody.append(...rows);
};
