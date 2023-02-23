'use strict';

const readNumber = () => {
  let number;

  if (number === null || number === '') return null;

  do {
    number = prompt('Введите число');
  } while (!isFinite(number));

  return +number;
};
