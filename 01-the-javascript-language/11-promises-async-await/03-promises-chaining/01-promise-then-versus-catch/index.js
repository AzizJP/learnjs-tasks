'use strict';

// Являются ли фрагменты кода ниже эквивалентными? Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?

promise.then(f1).catch(f2);

// Против:

promise.then(f1, f2);

// нет, не эквивалентны
// в первом случае в блоке catch обрабатывается ошибка
// во втором же - ошибка будет необработанной