'use strict';

let str = 'Привет';

str.test = 5;

alert(str.test); // выведет ошибку или undefind - в зависимости включен ли строгий режим
// Примитивы не могут хранить дополнительные данные