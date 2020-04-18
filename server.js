var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
const io = require('socket.io')(http)
const mongoose = require('mongoose')

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const dbUrl = 'mongodb+srv://user:password12345@learning-node-g4nqz.mongodb.net/test?retryWrites=true&w=majority'


var Message = mongoose.model('Message', {
    name: String,
    message: String
})

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages)
    })
})

app.post('/messages', async (req, res) => {

    try {

        var message = new Message(req.body)

        var savedMessage = await message.save()
        console.log('saved')

        var censored = await Message.findOne({message: 'badword'})
        if (censored)
            await Message.deleteMany({_id: censored.id})
        else
            io.emit('message', req.body)
        res.sendStatus(200)

    } catch (err) {
        res.sendStatus(500)
        return console.error(err)
    }
})



io.on('connection', (socket) => {
    console.log('a user connected')
})
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log('Mongo DB connection', err)
})

var server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})