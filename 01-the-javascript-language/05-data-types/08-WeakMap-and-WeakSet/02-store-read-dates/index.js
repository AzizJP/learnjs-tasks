'use strict';

let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let dateOfMessage = new WeakMap();

dateOfMessage.set(messages[0], new Date());
