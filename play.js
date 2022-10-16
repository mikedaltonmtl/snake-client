const connect = require('./client.js');

console.log("Connecting ...");
connect();

connect().on("data", (data) => {
  console.log("Snek says: ", data);
});
