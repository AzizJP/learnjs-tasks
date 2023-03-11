'use strict';

function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: 'Вася',
});

alert(bound.test); // что выведет? почему?

// Мы с помощью bind привязали новое значение, поэтому test уже не найдется, следовательно, ответ будет undefined
