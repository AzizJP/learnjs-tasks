'use strict';

const unique = arr => {
  return arr.filter((i, idx) => {
    if (idx === arr.indexOf(i)) return i;
  });
};

let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];

console.log(unique(strings)); // кришна, харе, :-O
