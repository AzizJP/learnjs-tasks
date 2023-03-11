'use strict';

// Ваш код должен при помощи DOM получить четыре пары координат:

// верхний левый, внешний угол (это просто).
// нижний правый, внешний угол (тоже просто).
// верхний левый, внутренний угол (чуть сложнее).
// нижний правый, внутренний угол (есть несколько способов, выберите один).
// Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.

// P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.

const fieldCoords = field.getBoundingClientRect();

const topLeftOuterCorner = fieldCoords.left + ':' + fieldCoords.top;

const bottomRightOuterCorner = fieldCoords.right + ':' + fieldCoords.bottom;

const topLeftInnerCorner =
  fieldCoords.left +
  field.clientLeft +
  ':' +
  (fieldCoords.top + field.clientTop);

const bottomRightInnerCorner =
  fieldCoords.left +
  field.clientLeft +
  field.clientWidth +
  ':' +
  (fieldCoords.top + field.clientTop + field.clientHeight);

const pointCoords = {
  topLeftOuterCorner: `1. ${topLeftOuterCorner}`,
  bottomRightOuterCorner: `2. ${bottomRightOuterCorner}`,
  topLeftInnerCorner: `3. ${topLeftInnerCorner}`,
  bottomRightInnerCorner: `4. ${bottomRightInnerCorner}`,
};

console.log(Object.values(pointCoords));
