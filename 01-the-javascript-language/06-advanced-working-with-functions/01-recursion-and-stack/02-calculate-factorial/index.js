'use strict';

const factorial = n => {
  if (n === 0) return alert('Введите число больше 0');
  if (n === 1) return n;
  return n * factorial(n - 1);
};

alert(factorial(5));
