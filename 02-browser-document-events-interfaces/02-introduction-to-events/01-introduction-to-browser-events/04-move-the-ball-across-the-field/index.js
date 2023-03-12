'use strict';

const field = document.getElementById('field');
const ball = document.getElementById('ball');

const handleMoveBall = evt => {
  const fieldCoords = field.getBoundingClientRect();

  let topBallCoords =
    evt.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2;

  let leftBallCoords =
    evt.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2;

  if (topBallCoords < 0) topBallCoords = 0;

  if (topBallCoords + ball.clientHeight > field.clientHeight) {
    topBallCoords = field.clientHeight - ball.clientHeight;
  }

  if (leftBallCoords < 0) leftBallCoords = 0;

  if (leftBallCoords + ball.clientWidth > field.clientWidth) {
    leftBallCoords = field.clientWidth - ball.clientWidth;
  }

  ball.style.left = `${leftBallCoords}px`;
  ball.style.top = `${topBallCoords}px`;
};

field.onclick = handleMoveBall;
