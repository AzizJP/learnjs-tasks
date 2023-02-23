'use strict';

const sumSalaries = salaries => {
  let sum = 0;
  let values = Object.values(salaries);

  for (let value of values) {
    sum += value;
  }

  return sum;
};

let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250,
};

console.log(sumSalaries(salaries)); // 650
