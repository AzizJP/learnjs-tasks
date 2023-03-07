'use strict';

const aclean = arr => {
  let map = new Map();

  arr.forEach(i => {
    let sortedLetters = i
      .toLowerCase()
      .split('')
      .sort()
      .join('');
    map.set(sortedLetters, i);
  });
  return Array.from(map.values());
};

let arr = [
  'nap',
  'teachers',
  'cheaters',
  'PAN',
  'ear',
  'era',
  'hectares',
];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
