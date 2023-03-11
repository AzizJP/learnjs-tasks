'use strict';

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

speedy.eat('apple');
alert(speedy.stomach);
alert(lazy.stomach);

// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

//  Это происходит, потому что у них один массив на двоих, решить это можно добавив для хомяков личный stomach
