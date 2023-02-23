'use strict';

const getWeekDay = date => {
  let weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return weekDays[date.getDay()];
};

let date = new Date(2014, 0, 3); // 3 января 2014 года
alert(getWeekDay(date)); // ПТ
