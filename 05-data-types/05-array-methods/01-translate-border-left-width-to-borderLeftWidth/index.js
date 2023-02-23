'use strict';

const camelize = str => {
  return str
    .split('-')
    .map((i, idx) =>
      idx === 0 ? i : i[0].toUpperCase() + i.slice(1)
    )
    .join('');
};

console.log(camelize('background-color')); // 'backgroundColor';
console.log(camelize('list-style-image')); // 'listStyleImage';
console.log(camelize('-webkit-transition')); // 'WebkitTransition';
