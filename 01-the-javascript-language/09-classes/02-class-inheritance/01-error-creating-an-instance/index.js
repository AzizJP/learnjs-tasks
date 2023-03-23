'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name); // При наследовании, должен вызываться super()
    this.created = Date.now();
  }
}

let rabbit = new Rabbit('Белый кролик'); // Error: this is not defined
alert(rabbit.name);
