'use strict';

let phrase = 'Hello';

if (true) {
  let user = 'John';

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

// Результат будет ошибкой, т.к. функция создана в лексическом окружении условия "if", а вызывается во внешнем лексическом окружении, где данной функции не существует
