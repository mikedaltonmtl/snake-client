// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {

  connection = conn;
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

  // map the WASD movement keys
  switch (key) {
  case 'w' :
    connection.write("Move: up");
    break;
  case 'a' :
    connection.write("Move: left");
    break;
  case 's' :
    connection.write("Move: down");
    break;
  case 'd' :
    connection.write("Move: right");
    break;
  }
  
};

module.exports = setupInput;