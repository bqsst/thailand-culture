const express = require('express')
const router = express.Router()
const {list} = require('../controllers/detail')

router.get('/detail', list)

module.exports = router;