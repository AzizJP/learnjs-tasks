'use strict';

// Вывод значений списка с помощью цикла
const printList = list => {
  let copyList = { ...list };

  while (copyList) {
    console.log(copyList.value);
    copyList = copyList.next;
  }
};

// Вывод значений списка с помощью рекурсии
const printList2 = list => {
  console.log(list.value);
  if (list.next) printList2(list.next);
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

printList(list);
printList2(list);

// Как лучше: с рекурсией или без?

// Как я уже писал в задаче "Вычислить сумму чисел до заданного", цикл быстрее рекурсии, из-за отсутствия операций, необходимых для вложенностей в рекурсии.
// Но, судя по личному опыту, если объекты или массивы, с которыми мы имеем дело, имеют небольшую вложенность, удобней использовать рекурсию - она более понятна, а разница в скорости в этом случае не так велика
