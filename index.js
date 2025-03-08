var express = require('express')
var app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

//nome do evento //socket = client
io.on('connection', (socket)=>{
  // console.log(socket)
  // console.log(socket.id)
  socket.on('hello', (data)=>{
    console.log(```hello ${data}```)
    console.log(data)
  })
})


http.listen(3000, ()=>{
  console.log('hello world')
})

