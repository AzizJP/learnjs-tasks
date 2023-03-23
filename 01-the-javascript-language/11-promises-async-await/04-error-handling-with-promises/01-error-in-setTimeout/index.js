'use strict';

// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error('Whoops!');
  }, 1000);
}).catch(alert);

// нет, не выполнится
// в данном примере ошибка генерируется асинхронно, поэтому блок catch ее не перехватит
