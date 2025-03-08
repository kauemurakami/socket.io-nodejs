var express = require('express')
var app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
const jsonToObject = require('./core/middlewares/json_to_object')

//nome do evento //socket = client
io.on('connection', (socket)=>{
  // console.log(socket)
  // console.log(socket.id)

  //middleware para converter automaticamente os jsons em objetos
  jsonToObject(socket)

  socket.on('hello', (data)=>{
    // console.log(```hello ${data}```)
    console.log('hello'+ data.name)
  })

  socket.on('word', (data)=>{
    socket.emit('result', 'User ' + data.user)
  })


})


http.listen(3000, ()=>{
  console.log('hello world')
})

