'use strict';

alert((1.35).toFixed(1)); // 1.4
alert((6.35).toFixed(1)); // 6.3

// В JS существуют погрешности вычисления дробных чисел
// Один из вариантов избавления погрешностей:

alert((6.35 * 10).toFixed(0) / 10); // 6.4
