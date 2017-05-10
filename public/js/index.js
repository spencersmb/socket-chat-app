var socket = io();

socket.on('connect', function(){
  console.log('connected to the server from the client')

  socket.emit('createEmail', { data: 'email created on client'})
  socket.emit('createMessage', {
    text: 'new message sent from the client',
    from: 'teela',
    createdAt: 12323451
  })
})

socket.on('disconnect', function(){
  console.log('Disconnectd from sever on clientt-side')
})

socket.on('newEmail', function(email){
  console.log('New Email event emitted')
  console.log(email);
})


socket.on('newMessage', function(message){
  console.log('newMessage event recieved from Server')
  console.log(message);
})