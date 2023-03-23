'use strict';

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit('Rab');

// метод hasOwnProperty от Object.prototype
alert(rabbit.hasOwnProperty('name')); // true

class RabbitChild extends Object {
  constructor(name) {
    super(); // При наследовании необходимо вызывать супер
    this.name = name;
  }
}

let rabbitChild = new Rabbit('Кроль');

alert(rabbitChild.hasOwnProperty('name')); // true
