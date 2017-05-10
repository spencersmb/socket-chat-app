const path = require('path');
const http = require('http')
const express = require('express')
const publicPath = path.join(__dirname, '../public')
const app = express();
const port = process.env.PORT || 3000
const socketIO = require('socket.io')
const server = http.createServer( app )
const io = socketIO(server)



app.use(express.static(publicPath)) // points our app to this directory

// listen for new connection
io.on('connection', (socket)=>{
  console.log('new user connectd');

  socket.on('disconnect', (socket)=>{
    console.log('user disconnected');
  })

  socket.emit('newEmail', {data: 'email data'})

  socket.on('createEmail', (email) => {
    console.log('server recieved email')
    console.log(email)
  })

  socket.emit('newMessage', {
    text: 'emiting new message from the server',
    from: 'spencer',
    createdAt: 12323451
  })

  socket.on('createMessage', (message) => {
    console.log('server recieved new message from client')
    console.log(message)

    console.log('newMessage sent to everytone');
    io.emit('newMessage', {
      text: message.text,
      from: message.from,
      createdAt: message.createdAt
    })
  })
  
})

server.listen(port, () => {
  console.log('Server is up on port: ' + port);
});



