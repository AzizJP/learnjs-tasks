'use strict';

const showNotification = options => {
  const { top = 0, right = 0, html, className } = options;

  const notification = document.createElement('div');

  console.log(notification);

  notification.className = 'notification';

  if (className) {
    notification.classList.add(className);
  }

  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;

  notification.textContent = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
};

// test it
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello ' + i++,
    className: 'welcome',
  });
}, 2000);
