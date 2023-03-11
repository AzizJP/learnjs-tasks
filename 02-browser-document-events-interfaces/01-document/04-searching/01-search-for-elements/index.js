'use strict';

// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
const table = document.getElementById('age-table');

// Все элементы label внутри этой таблицы (их три).
table.getElementsByTagName('label');

// Первый td в этой таблице (со словом «Age»).
table.rows[0].cells[0];

// Форму form с именем name="search".
const form = document.getElementsByName('search')[0];

// Первый input в этой форме.
form.getElementsByTagName('input')[0];

// Последний input в этой форме.
const inputs = form.querySelectorAll('input');
inputs[inputs.length - 1];

// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.
