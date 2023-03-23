'use strict';

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

// выведет 1, Все последующие вызовы resolve и reject будут проигнорированы
