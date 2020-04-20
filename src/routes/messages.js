const express = require('express')
const router = new express.Router()
const { messageControllers } = require('../controllers')

router.post('/', messageControllers.postController)
router.get('/', messageControllers.getController)

module.exports = router
