'use strict';

// Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?

// Напишите соответствующее выражение для произвольного элемента elem.

// P.S. Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать 0.

const showScrollBottom = elem => {
  const scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
  console.log(scrollBottom);
};
