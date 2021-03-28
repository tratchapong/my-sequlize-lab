const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({msg : "in user /"})
})

router.get('/getAll', userController.getAll)
router.get('/getOne/:id', userController.getOne)

router.get('/hello', userController.hello)

module.exports = router