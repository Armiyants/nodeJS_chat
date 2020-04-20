const express = require('express')
const messages = require('./messages')

const router = new express.Router()

router.use('/messages', messages)


module.exports = router
