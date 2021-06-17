module.exports = (io, socket) => {

    // listen to when new user joins
    socket.on('new user', (username) => {
        console.log(`${username} has joined the chat`)
        io.emit('new user', username);
    })

}