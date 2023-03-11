'use strict';

// Вариант с использованием setInterval
const printNumbers = (from, to) => {
  let i = from;

  const timerId = setInterval(() => {
    console.log(i);
    if (i === to) clearInterval(timerId);
    i++;
  }, 1000);
};

printNumbers(10, 15);

// Вариант с использованием setInterval
const printNumbers2 = (from, to) => {
  let i = from;

  const printNumber = () => {
    console.log(i);
    if (i < to) {
      setTimeout(printNumber, 1000);
    }
    i++;
  };

  setTimeout(printNumber, 1000);
};

printNumbers2(10, 15);
