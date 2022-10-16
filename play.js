const connect = require('./client.js'); // to establish connection with game server
const setupInput = require('./input.js'); // interface to handle user input from stdin

console.log("Connecting ...");
const conn = connect(); // establish the connection

// print output received from the game server
conn.on("data", (data) => {
  console.log("Snek says: ", data);
});

// instructions upon connection
conn.on("connect", () => {
  console.log("Successfully connected to game server");
  conn.write("Name: MJD"); // transmit to game server
});



setupInput(conn); // user input interface

/*
conn.on("connect", () => {
  for (let i = 1; i < 40; i++) {
    setTimeout(() => {
      conn.write("Move: up");
    }, 50 * i)
  }
});
*/