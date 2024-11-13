const express = require('express')
const router = express.Router()
const {list, deleted, create} = require('../controllers/list')

router.get('/list', list)
router.delete('/list/:id', deleted)
router.post('/list', create)

module.exports = router;