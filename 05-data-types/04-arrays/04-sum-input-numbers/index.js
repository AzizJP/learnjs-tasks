'use strict';

const sumInput = () => {
  let arr = [];
  let sum = 0;

  while (true) {
    let currentValue = prompt('Введите число', 0);

    if (
      currentValue === '' ||
      currentValue === null ||
      !isFinite(currentValue)
    )
      break;

    arr.push(+currentValue);
  }

  for (number of arr) {
    sum += number;
  }

  return sum;
};

alert(sumInput());
