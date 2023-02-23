'use strict';

const getSecondsToday = () => {
  let dateNow = new Date();
  let today = new Date(
    dateNow.getFullYear(),
    dateNow.getMonth(),
    dateNow.getDate()
  );
  return Math.ceil((dateNow - today) / 1000);
};

getSecondsToday();
