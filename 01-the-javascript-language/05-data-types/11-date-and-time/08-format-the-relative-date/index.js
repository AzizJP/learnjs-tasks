'use strict';

const formatDate = date => {
  let dateToNow = new Date() - date;
  let dateToNowInSec = Math.ceil(dateToNow / 1000);
  let dateToNowInMin = Math.ceil(dateToNowInSec / 60);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let formatDay = day < 10 ? '0' + day : day;
  let formatMonth = month < 10 ? '0' + month : month;
  let formatYear = year.toString().slice(-2);
  let formatHour = hour < 10 ? '0' + hour : hour;
  let formatMinutes =
    minutes < 10 ? '0' + minutes : minutes;

  if (dateToNow < 1000) {
    return 'прямо сейчас';
  }

  if (dateToNowInSec < 60) {
    return `${dateToNowInSec} сек. назад`;
  }

  if (dateToNowInMin < 60) {
    return `${dateToNowInMin} мин. назад`;
  }

  return `${formatDay}.${formatMonth}.${formatYear}.${formatHour}:${formatMinutes}`;
};

alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));
