'use strict';

function pow(x, n) {
  if (n >= 1) return alert(x ** n);
  return alert('Степень n должна быть натуральным числом');
}
pow(3, 2); // 3 * 3 = 9
pow(3, 3); // 3 * 3 * 3 = 27
pow(1, 100); // 1 * 1 * ...* 1 = 1
pow(2, -20); // 1 * 1 * ...* 1 = 1
