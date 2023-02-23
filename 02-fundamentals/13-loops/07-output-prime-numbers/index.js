'use strict';

let maxOfInterval = prompt(
  'Введите крайнее число интервала от 2 до ...'
);

primeNumber: for (i = 2; i <= maxOfInterval; i++) {
  for (j = 2; j < i; j++) {
    if (i % j === 0) continue primeNumber;
  }
  alert(i);
}
