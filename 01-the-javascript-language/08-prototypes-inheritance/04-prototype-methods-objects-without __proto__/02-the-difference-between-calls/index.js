'use strict';

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  alert(this.name);
};

let rabbit = new Rabbit('Rabbit');

rabbit.sayHi(); // Rabbit - в этом вызове this равен rabbit
Rabbit.prototype.sayHi(); // undefined - this равен Rabbit.prototype
Object.getPrototypeOf(rabbit).sayHi(); // undefined - this равен Rabbit.prototype
rabbit.__proto__.sayHi(); // undefined - this равен Rabbit.prototype
