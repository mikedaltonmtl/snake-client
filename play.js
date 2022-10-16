const connect = require('./client.js'); // to establish connection with game server

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

conn.on("connect", () => {

  // for (let i = 1; i < 40; i++) {

  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 50 * i) 
  // }
});

// setup interface to handle user input from stdin
const setupInput = function() {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // add event listener

  return stdin;
};

// event handler
const handleUserInput = function(key) {

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

};

setupInput();
