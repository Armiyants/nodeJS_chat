const newMessageHandler = require('./newMessageHandler')

module.exports = (io) => {
    return {
        newMessage: newMessageHandler(io),
    }
}