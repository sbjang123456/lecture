// lerna-example/packages/a/main.js

const b = require("b");

(async function main() {
  const users = await b();

  console.log(users.map((user) => user.login).join(", ")); //
})();
