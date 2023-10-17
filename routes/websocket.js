const { Server: ServerWs } = require('socket.io')

let wsIoServer

/**
 * 
 * @param {Express} server 
 * @returns 
 */
function createServerWs(server) {
    if (wsIoServer) return wsIoServer
    wsIoServer = new ServerWs(server)

    wsIoServer.on("connection", (socket) => {
        console.log(`New socket connection : ${socket.id}`);
        socket.on('disconnect', () => {
            console.log(`user disconnected: ${socket.id}`);
        });

        socket.on("message", (param1, param2) => {
            console.log(`message received: ${param1} ${param2}`);

            socket.emit("notif", "hello from server")
        })
    })

    return wsIoServer;
}

module.exports = {
    createServerWs,
}