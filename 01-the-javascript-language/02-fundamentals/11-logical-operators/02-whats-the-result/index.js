'use strict';

alert(alert(1) || 2 || alert(3)); //выведет 1, выполнив alert(1), т.к. alert() возвращает undefind, а затем выведет 2
