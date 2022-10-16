const net = require("net");
const { IP, PORT, ENCODING } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,   // IP address of the game server
    port: PORT, // PORT to use on the game server
  });

  // interpret incoming data as text
  conn.setEncoding(ENCODING);

  return conn;
};

module.exports = connect;