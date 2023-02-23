'use strict';

const ucFirst = str => {
  if (!str) return 'Введите слово';
  return str[0].toUpperCase() + str.slice(1);
};
alert(ucFirst('вася'));
