'use strict';

let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let readMessages = new WeakSet();
let indexOfMessage = 0;

readMessages.add(messages[indexOfMessage]);

console.log(
  `Is message ${indexOfMessage} read: ` +
    readMessages.has(messages[indexOfMessage])
);

messages = [
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

console.log(
  `Is message ${indexOfMessage} read: ` +
    readMessages.has(messages[indexOfMessage])
);
