const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { orgin: "*"}
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', message);
    });
});

http.listen(process.env.PORT || 8080);

