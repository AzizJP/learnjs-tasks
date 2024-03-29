'use strict';

// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

function loadJson(url) {
  return fetch(url).then(response => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404

// перепишем

async function loadJson(url) {
  const res = await fetch(url);

  if (res.status == 200) {
    const json = await res.json();
    return json;
  }

  throw new Error(res.status);
}

loadJson('no-such-user.json').catch(alert);
