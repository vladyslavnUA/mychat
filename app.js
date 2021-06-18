const express = require('express');
const app = express();

// for socket.io
const server = require('http').Server(app);
const io = require('socket.io')(server);

let onlineUsers = {};
let channels = {"General": []};

// Socket.io implementation
io.on('connection', (socket) => {
    // this is read on any new socket connection
    require('./sockets/chat.js')(io, socket, onlineUsers, channels);
})

const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.render('index.handlebars');
})

server.listen(4000, () => {
  console.log('Server listening on Port 4000');
})