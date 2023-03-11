'use strict';

// Фукнция shooter не имеет локальной переменной, а берет ее из лексического окружения функции makeArmy и вызывается после её завершения, отсюда и все 10. Решить этом можно добавив переменную в лексическое окружение цикла и присвоить ей значение от i, после чего передать новую переменную в функцию shooter:

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      alert(j);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5
