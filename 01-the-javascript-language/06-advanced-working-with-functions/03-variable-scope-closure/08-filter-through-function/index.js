'use strict';

const inBetween = (min, max) => {
  const nextFunc = x => {
    return x >= min && x <= max;
  };
  return nextFunc;
};

const inArray = arr => {
  const nextFunc = x => {
    return arr.includes(x);
  };
  return nextFunc;
};

let arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2
