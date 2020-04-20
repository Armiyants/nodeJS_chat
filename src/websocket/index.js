const Io = require('socket.io')
const Handlers = require('./handlers')

let io = null

module.exports = {
    createServer (server) {
        io = Io(server)
        const handlers = Handlers(io)
        io.on('connection', (socket) => {
            socket.on('message', handlers.newMessage)
        })
        io.on('error', (socket) => {
            //
        })

        io.on('disconnect', (socket) => {

        })

        io.on('handshake', (socket) => {

        })

        return io
    },

    getIoServer () {
        return io
    }
}