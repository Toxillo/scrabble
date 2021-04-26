const {Server} = require('socket.io'), server = new Server(8000);

let clients = new Map();

// event fired every time a new client connects:
server.on('connection', (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
    // initialize this client's sequence number
    clients.set(socket, socket.id);

    // when socket disconnects, remove it from the list:
    socket.on('disconnect', () => {
        clients.delete(socket);
        console.info(`Client gone [id=${socket.id}]`);
    });

    socket.on('hello', (arg) => {
        console.log(arg); // world
    });
});



