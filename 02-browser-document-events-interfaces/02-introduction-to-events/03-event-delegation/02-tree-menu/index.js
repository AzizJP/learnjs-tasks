'use strict';

const list = document.querySelectorAll('li');
const tree = document.getElementById('tree');

list.forEach(element => {
  const span = document.createElement('span');
  element.prepend(span);
  span.append(span.nextSibling);
});

tree.onclick = event => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childTree = event.target.parentNode.querySelector('ul');
  if (!childTree) return;

  if (childTree.style.display === 'none') {
    return (childTree.style.display = 'block');
  }
  return (childTree.style.display = 'none');
};
