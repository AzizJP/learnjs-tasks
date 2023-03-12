'use strict';

// В переменной button находится кнопка. Изначально на ней нет обработчиков.

// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

button.addEventListener('click', () => alert('1'));
// Выведет 1

button.removeEventListener('click', () => alert('1'));
// Не удалит слушетеля, т.к. обработчик безымянный

button.onclick = () => alert(2);
// Сработает и выведет 2, т.к. то же, что и добавить напрямую обработчик в onclick в HTML