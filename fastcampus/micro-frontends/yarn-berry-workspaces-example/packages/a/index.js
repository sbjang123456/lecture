// yarn-berry-workspaces-example/packages/a/index.js

const b = require("b");

(async function main() {
  const users = await b();

  console.log(users.map((user) => user.login).join(", "));
})();
