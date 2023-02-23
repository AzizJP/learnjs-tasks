'use strict';

const checkSpam = str => {
  return (
    str.toLowerCase().includes('viagra') ||
    str.toUpperCase().includes('XXX') ||
    false
  );
};

alert(checkSpam('buy ViAgRA now')); // true
alert(checkSpam('free xxxxx')); // true
alert(checkSpam('innocent rabbit')); // false
