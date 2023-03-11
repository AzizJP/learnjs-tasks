'use strict';

// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

// Укажите хотя бы 3 отличия, лучше – больше.

const textElement = document.querySelector('.text');

// 1) clientWidth - number;
//    getComputedStyle(textElement).width - string

console.log(typeof textElement.clientWidth);
console.log(typeof getComputedStyle(textElement).width);

// 2) getComputedStyle(textElement).width зависит от свойства "box-sizing", тем самым, изменение этого свойства может вызвать поломку в JS

// 3) getComputedStyle(textElement).width можно указывать как в относительных единицах — процентах (%), vw, vmin и так далее, так и в абсолютных единицах — пикселях (px), rem, em и любых других единицах измерения, доступных в вебе, также он может быть "auto" т.е. можно выстроить зависимость от родителя

// 4) При появлении полосы прокрутки getComputedStyle(textElement).width может выдавать неверное значение ширины контента в зависимости от браузера

// 5) getComputedStyle(textElement).width не включает в себя padding, а clientWidth включает
