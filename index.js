var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  
  socket.on(`new user`, (user) => {
    io.emit(`new user`, user)
  })

  socket.on(`append user`, (userID) => {
    io.emit(`append user`, userID)
  })

  socket.on(`add nickname`, (nickname) => {
    io.emit(`add nickname` , nickname)
  })

  socket.on(`chat message`, (message) => {
    io.emit(`chat message`, message);
  })

  socket.on(`disconnect`, () => {
    io.emit(`user disconnect`)
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
