'use strict';

let user = {
  name: 'Василий Иванович',
  age: 35,
};

let userJSON = JSON.stringify(user);

console.log(userJSON);

let copyUser = JSON.parse(userJSON);

console.log(copyUser);
