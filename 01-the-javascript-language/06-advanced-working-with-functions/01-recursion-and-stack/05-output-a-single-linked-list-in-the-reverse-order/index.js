'use strict';

// Вывод значений списка с помощью цикла в обратном порядке
const printListReverse = list => {
  let copyList = { ...list };
  let reverseList = [];

  while (copyList) {
    reverseList.unshift(copyList.value);
    copyList = copyList.next;
  }

  reverseList.forEach(i => {
    console.log(i);
  });
};

// Вывод значений списка с помощью рекурсии в обратном порядке
const printListReverse2 = list => {
  if (list.next) {
    printListReverse2(list.next);
  }
  console.log(list.value);
};

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printListReverse(list);
printListReverse2(list);
