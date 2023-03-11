'use strict';

function makeWorker() {
  let name = 'Pete';

  return function () {
    alert(name);
  };
}

let name = 'John';

// create a function
let work = makeWorker();

// call it
work(); // what will it show?

// Отобразится "Pete", т.к. функция сначала ищет переменную в своем лексическом окружении, затем во внешнем, и, если она ее не находит и на этом уровне, то поднимается выше
