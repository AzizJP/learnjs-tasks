'use strict';

let timerId;
const parentClassName = 'time';
const time = document.querySelector(`.${parentClassName}`);
const hoursElement = time.querySelector(`.${parentClassName}__hours`);
const minutesElement = time.querySelector(`.${parentClassName}__minutes`);
const secondsElement = time.querySelector(`.${parentClassName}__seconds`);

function update() {
  const date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  hoursElement.textContent = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  minutesElement.textContent = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  secondsElement.textContent = seconds;
}

const clockStart = () => {
  update();
  timerId = setInterval(update, 1000);
};

const clockStop = () => {
  clearInterval(timerId);
  timerId = null;
};
