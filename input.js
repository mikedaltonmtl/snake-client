const { ENCODING, KEYMAPPINGS } = require("./constants");

let connection; // Stores the active TCP connection object

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on("data", handleUserInput); // add event listener
  connection.on('close', () => process.exit()); // exit if server closes connection (you die)
  return stdin;
};

// event handler for user keyboard input
const handleUserInput = function(key) {
  
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  // send key mapping commands to server
  if (KEYMAPPINGS[key]) {
    connection.write(KEYMAPPINGS[key]);
  }
};

module.exports = setupInput;