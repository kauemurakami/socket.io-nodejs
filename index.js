var express = require('express')
var app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
const jsonToObjectMiddleware = require('./core/middlewares/json_to_object')

//nome do evento //socket = client
io.on('connection', (socket) => {
  // console.log(socket)
  // console.log(socket.id)

  //middleware para converter automaticamente os jsons em objetos
  jsonToObjectMiddleware(socket)

  socket.on('disconnect', () => {
    console.log('X disconnected ' + socket.id)
  })

  socket.on('hello', (data) => {
    // console.log(```hello ${data}```)
    console.log('hello' + data.name)
  })

  socket.on('word', (data) => {
    socket.emit('result', 'User ' + data.user)
  })


})


http.listen(3000, () => {
  console.log('APP RUNNING PORT:3000')
})

