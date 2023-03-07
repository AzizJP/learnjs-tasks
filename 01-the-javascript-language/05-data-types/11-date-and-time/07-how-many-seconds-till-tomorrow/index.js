'use strict';

const getSecondsToTomorrow = () => {
  let dateNow = new Date();
  let tomorrow = new Date(
    dateNow.getFullYear(),
    dateNow.getMonth(),
    dateNow.getDate() + 1
  );
  return Math.ceil((tomorrow - dateNow) / 1000);
};

getSecondsToTomorrow();
