'use strict';

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

// Что покажет alert(rabbit.eats) при:

// Добавим строчку
Rabbit.prototype = {}; // true

// Заменили на
Rabbit.prototype.eats = false; // false

// Заменили на
delete rabbit.eats; // true

// Заменили на
delete Rabbit.prototype.eats; // undefined

alert(rabbit.eats);
