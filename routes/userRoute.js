const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({msg : "in user /"})
})

router.get('/', userController.getAll)
router.get('/findName', userController.findName)
router.get('/:id', userController.getOne)



module.exports = router