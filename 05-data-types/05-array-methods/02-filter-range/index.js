'use strict';

let array = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
  return arr.filter(i => i >= a && i <= b);
};

console.log(filterRange(array, 1, 4)); // 3,1
console.log(array); // 5,3,8,1
