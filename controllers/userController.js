const users = require('../models/users')

exports.hello = (req, res, next) => {
  // const {name, age} = req.query
  console.log(req.query)
  res.status(200).json(req.query)
}

exports.getAll = (req, res, next) => {
  let result = users.getAll()
  console.log(result)
  res.status(200).json(result)
}

exports.getOne = (req, res, next) => {
  let {id} = req.params
  let result = users.getOne(id)
  res.status(200).json(result)
}

// exports.getOne = (req, res, next) => {
//   let {id} = req.params
//   res.status(200).json(users.getOne(id))
// }