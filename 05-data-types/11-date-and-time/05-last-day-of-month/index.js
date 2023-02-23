'use strict';

const getLastDayOfMonth = (year, month) => {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
};

console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2015, 1)); // 28
console.log(getLastDayOfMonth(2020, 1)); // 29
console.log(getLastDayOfMonth(2022, 11)); // 31
