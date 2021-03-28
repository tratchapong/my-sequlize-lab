const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.get('/', userController.getAll)
router.get('/findName', userController.findName)
router.get('/:id', userController.getOne)
router.post('/', userController.create)
router.delete('/:id', userController.deleteOne)

module.exports = router