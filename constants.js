const IP = 'localhost';  // IP address of the game server
const PORT = 50541;      // PORT to use on the game server
const ENCODING = "utf8"; // type of encoding to use

// if user provides valid argument (<= 3 chars) use given name, or use as default
const PLAYER = process.argv.length > 2 && process.argv[2].length <= 3 ? process.argv[2] : 'SNK';

const KEYMAPPINGS = {
  // movement
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
  // messages
  f: 'Say: faster!',
  q: 'Say: this apple is mine!',
  e: 'Say: come on man!',
  z: 'Say: zzzzzzzzzzz!',
};

module.exports = {
  IP,
  PORT,
  ENCODING,
  PLAYER,
  KEYMAPPINGS,
};