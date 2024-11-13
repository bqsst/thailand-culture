const express = require('express')
const router = express.Router()
const {list} = require('../controllers/region')

router.get('/region', list)

module.exports = router;