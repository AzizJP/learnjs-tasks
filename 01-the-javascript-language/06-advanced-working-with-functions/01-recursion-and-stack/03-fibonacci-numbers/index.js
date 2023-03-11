'use strict';

const fib = n => {
  let firstValue = 1;
  let secondValue = 1;
  for (let i = 3; i <= n; i++) {
    let sum = firstValue + secondValue;
    firstValue = secondValue;
    secondValue = sum;
  }
  return secondValue;
};

alert(fib(77));
