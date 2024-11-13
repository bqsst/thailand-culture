const express = require('express');
const router = express.Router();
const { read, list, create, update, deleted } = require('../controllers/favorite')   

//http://localhost:5000/api/product
router.get('/favorite', list)
//show(get)
router.get('/favorite/:id', read)
//create(post)
router.post('/favorite', create)
//update(put)
router.put('/favorite/:id', update)
//delete(delete)
router.delete('/favorite/:id', deleted)

module.exports = router;