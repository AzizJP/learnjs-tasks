'use strict';

// Если elem – произвольный узел DOM-элемента…

// Правда, что elem.lastChild.nextSibling всегда равен null?
// Да, последний элемент родителя .lastChild не имеет следующего элемента родителя .nextSibling

// Правда, что elem.children[0].previousSibling всегда равен null?
// Нет, .children относится к потомкам, а .previousSibling предыдущий узел родителя
