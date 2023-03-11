'use strict';

const sum = a => {
  let currentSum = a;
  const nextFunc = b => {
    currentSum += b;
    return currentSum;
  };
  return nextFunc;
};

console.log(sum(1)(2));
console.log(sum(5)(-1));
