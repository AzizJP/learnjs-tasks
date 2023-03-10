'use strict';

const sum = a => {
  let currentSum = a;

  const nextFunc = b => {
    currentSum += b;
    return nextFunc;
  };

  nextFunc.toString = function () {
    return currentSum;
  };

  return nextFunc;
};

console.log(sum(1)(2) == 3); // 1 + 2
console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);
