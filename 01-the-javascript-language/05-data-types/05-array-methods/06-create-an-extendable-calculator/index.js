'use strict';

function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = str => {
    const arr = str.split(' ');
    firstNumber = +arr[0];
    secondNumber = +arr[2];
    operator = arr[1];

    if (isNaN(firstNumber) || isNaN(secondNumber))
      return 'Аргументы должны иметь числовые значения';

    if (!this.methods[operator])
      return 'Выбранным оператором нет возможности произвести расчет. Попробуйте добавить его методом addMethod';

    return this.methods[operator](firstNumber, secondNumber);
  };
  this.addMethod = (name, func) => {
    this.methods[name] = func;
  };
}

let calc = new Calculator();

calc.addMethod('*', (a, b) => a * b);
calc.addMethod('/', (a, b) => a / b);
// calc.addMethod('**', (a, b) => a ** b);

console.log(calc.calculate('4 + 4'));
console.log(calc.calculate('4 - 4'));
console.log(calc.calculate('4 * 4'));
console.log(calc.calculate('4 / 4'));
console.log(calc.calculate('4 ** 4'));
console.log(calc.calculate('f ** 4'));
