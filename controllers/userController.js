const users = require('../models/users')

exports.getAll = (req, res, next) => {
  res.status(200).json(users.getAll())
}

exports.getOne = (req, res, next) => {
  let {id} = req.params
  res.status(200).json(users.getOne(id))
}

exports.findName = (req, res, next) => {
  // console.log(req.query)
  let {name} = req.query
  let result = users.findName(name)
  res.status(200).json(result)
}