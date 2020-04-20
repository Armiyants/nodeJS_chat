require('dotenv').config()

require('./models')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http').Server(app)
const path = require('path')
const routes = require('./routes')
const websocket = require('./websocket')
const { mongoService } = require('./services')

async function start () {
    try {
        await mongoService.connect()

        websocket.createServer(http)

        app.use(express.static(path.join(__dirname, '../static')))
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(routes)

        const server = http.listen(process.env.PORT, () => {
            console.log('index is listening on port', server.address().port)
        })
    } catch (err) {
        console.error(err)
    }
}

start()