'use strict';

function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // В данном случае alert() не вернет ничего, т.к. this возвращаемого объекта является this для функции makeUser()
