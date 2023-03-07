'use strict';

while (true) {
  let number = prompt('Введите число');
  if (number > 100) break;
}

// или

for (let i = 0; i < Infinity; i++) {
  let number = prompt('Введите число');
  if (number > 100) break;
}

// или

let number;
do {
  number = prompt('Введите число');
} while (number <= 100);
