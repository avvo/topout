const io = require('socket.io');

module.exports.connect = (server) => {
  console.log('socket connection established');
  const socket = io(server)
  module.exports.socket = socket;
  return socket;
};
