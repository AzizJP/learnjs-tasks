'use strict';

function go() {
  showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append('Hello, world!');
  });
}

function showCircle(x, y, radius) {
  const div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = x + 'px';
  div.style.top = y + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise(resolve => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    }, 0);
  });
}
