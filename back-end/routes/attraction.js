const express = require('express')
const router = express.Router()
const {list} = require('../controllers/attraction')

router.get('/attraction', list)

module.exports = router;