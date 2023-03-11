'use strict';

const list = document.querySelectorAll('li');
list.forEach(li => {
  alert(
    li.firstChild.data.trim() +
      ': ' +
      li.getElementsByTagName('li').length
  );
});
