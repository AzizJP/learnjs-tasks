'use strict';

let styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push('Рок-н-ролл');
console.log(styles);

styles[Math.ceil((styles.length - 1) / 2)] = 'Классика';
console.log(styles);

let firstElement = styles.shift();
console.log(firstElement);
console.log(styles);

styles.unshift('Рэп', 'Регги');
console.log(styles);
