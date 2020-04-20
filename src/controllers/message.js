const mongoose = require('mongoose')
const websocket = require('../websocket')

const Message = mongoose.model('Messages')

module.exports = {
    async postController (req, res) {
        try {
            var message = new Message(req.body)

            var savedMessage = await message.save()
            console.log('saved')

            var censored = await Message.findOne({message: 'badword'})
            if (censored)
                await Message.deleteMany({_id: censored.id})
            else
                websocket.getIoServer().emit('message', req.body)
            res.sendStatus(200)

        } catch (err) {
            res.sendStatus(500)
            return console.error(err)
        }
    },
    async getController (req, res) {
        try {
            const messages = await Message.find({})
            res.send(messages)
        } catch (err) {

        }

    }
}