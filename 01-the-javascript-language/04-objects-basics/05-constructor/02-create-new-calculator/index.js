'use strict';

function Calculator() {
  this.read = function () {
    this.a = +prompt('Введите первое значение', 0);
    this.b = +prompt('Введите второе значение', 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());
