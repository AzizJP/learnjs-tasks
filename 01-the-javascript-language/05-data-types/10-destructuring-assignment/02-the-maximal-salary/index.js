'use strict';

const topSalary = salaries => {
  let maxSalary = 0;
  let maxSalaryName;

  if (Object.keys(salaries).length === 0) return null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxSalaryName = name;
    }
  }

  return maxSalaryName;
};

let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 350,
};

console.log(topSalary(salaries));
