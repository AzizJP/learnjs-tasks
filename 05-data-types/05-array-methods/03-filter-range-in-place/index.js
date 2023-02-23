'use strict';

let initArray = [5, 3, 8, 1];

const filterRangeInPlace = (arr, a, b) => {
  arr.forEach((i, idx, array) =>
    i >= a && i <= b ? i : array.splice(idx, 1)
  );
};

console.log(filterRangeInPlace(initArray, 1, 4)); // удалены числа вне диапазона 1..4
console.log(initArray); // 5,3,8,1
