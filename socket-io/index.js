var io

exports.init = function (server) {
  io = require('socket.io')(server)

  io.on('connection', function (client) {
    console.log('a user connected')

    client.on('event', function (data) {
      console.log(data)
    })
    client.on('disconnect', function (data) {
      console.log('user disconnected')
    })
    client.on('chat message', function (message) {
      console.log('message: ' + message)
      io.emit('chat message', message)
    })
  })
}

exports.getSocket = function () {
  return io
}
