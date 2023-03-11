'use strict';

function f() {
  alert(this); // ?
}

let user = {
  g: f.bind(null),
};

user.g();

// Что выведет функция?
// Результатом будет null, т.к. мы забиндили контекст функции
