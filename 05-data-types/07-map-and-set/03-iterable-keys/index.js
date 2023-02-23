'use strict';

let map = new Map();

map.set('name', 'John');

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
// keys.push('more');

/*Ошибка появляется из-за того что keys - итерируемый объект,
чтобы метод push сработал необходимо
преобразовать keys в массив:*/

let arrOfKeys = Array.from(keys);
arrOfKeys.push('more');
console.log(arrOfKeys);
