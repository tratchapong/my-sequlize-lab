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

exports.create = (req, res, next) => {
  let newOne = req.body
  // console.log("Create :",newOne)
  let result = users.create(newOne)
  res.status(201).json({new_length: result})
}

exports.deleteOne = (req, res, next) => {
  let {id} = req.params
  let result = users.deleteOne(id)
  res.status(200).json({remove_data : result})
}
