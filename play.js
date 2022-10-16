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

conn.on("connect", () => {

  // for (let i = 1; i < 40; i++) {

  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 50 * i) 
  // }

});
