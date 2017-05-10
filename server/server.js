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
  
})

server.listen(port, () => {
  console.log('Server is up on port: ' + port);
});



