'use strict';

let name = 'John';

function sayHi() {
  alert('Hi, ' + name);
}

name = 'Pete';

sayHi(); // what will it show: "John" or "Pete"?

// Отобразится "Hi, Pete", т.к. функция используется последнее значение переменной
