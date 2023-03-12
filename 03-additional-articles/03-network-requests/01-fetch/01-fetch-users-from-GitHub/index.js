'use strict';

async function getUsers(names) {
  const usernames = [...names];
  const users = [];

  usernames.forEach(name => {
    let user = fetch(`https://api.github.com/users/${name}`).then(res => {
      if (res.ok) return res.json();
      return null;
    });

    users.push(user);
  });

  return await Promise.all(users);
}
