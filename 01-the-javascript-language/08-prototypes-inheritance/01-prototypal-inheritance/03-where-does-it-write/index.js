'use strict';

let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat(); // full будет принадлежать объекту rabbit, т.к. в прототипе this будет относится к rabbit
