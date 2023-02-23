'use strict';

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};
alert(randomInteger(1, 5));
