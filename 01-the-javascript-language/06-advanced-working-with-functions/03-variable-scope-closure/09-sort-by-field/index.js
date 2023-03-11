'use strict';

const byField = fieldName => {
  const nextFunc = (a, b) => {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  };
  return nextFunc;
};

let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

users.sort(byField('name'));
users.sort(byField('age'));
