const connect = require('./client.js'); // to establish connection with game server
const setupInput = require('./input.js'); // interface to handle user input from stdin
const { PLAYER } = require("./constants");

console.log("Connecting ...");
const conn = connect(); // establish the connection

// print output received from the game server
conn.on("data", (data) => {
  console.log("Snek says: ", data);
});

// instructions upon connection
conn.on("connect", () => {
  console.log("Successfully connected to game server");
  conn.write(`Name: ${PLAYER}`); // transmit to game server
});

conn.on("newPlayer", () => {
  console.log("Successfully heard broadcast");
});

setupInput(conn); // user input interface