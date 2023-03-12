'use strict';

const contents = document.getElementById('contents');

contents.onclick = evt => {
  const target = evt.target.closest('a');

  const handleLinkClick = link => {
    const isLeaving = confirm(`Leave for ${link}?`);

    if (!isLeaving) return false;
  };

  if (target && contents.contains(target)) {
    return handleLinkClick(target.getAttribute('href'));
  }
};
