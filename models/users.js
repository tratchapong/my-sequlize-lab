const data = [
  { name : 'ABC', age: 25},
  { name : 'DEF', age: 35},
  { name : 'GHI', age: 45},
  { name : 'JKL', age: 55},
  { name : 'MNO', age: 22},
]

const getAll = () => {
  return data
}

const getOne = (i) => {
  if (i > data.length) return { err : `not more than : ${data.length}` }
  if (data[i-1] === undefined) return { err : "Not found!!!" }
  return data[i-1]
}

const findName = (n) => {
  // console.log(data.filter( x=> x.name.includes(n)))
  return data.filter( x=> x.name.includes(n) )
}

const create = (newOne) => {
  return data.push(newOne)
}

const deleteOne = (i) => {
  return data.splice(i-1, 1)
}

module.exports = {getAll, getOne, findName, create, deleteOne}

