const connect = require('./client.js');

console.log("Connecting ...");
const conn = connect();

conn.on("data", (data) => {
  console.log("Snek says: ", data);
});

conn.on("connect", () => {

  console.log("Successfully connected to game server");

  conn.write("Name: MJD");


});
