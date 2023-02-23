'use strict';

const shuffle = array => {
  let i, j, k;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    k = array[j];
    array[j] = array[i];
    array[i] = k;
  }
};

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
