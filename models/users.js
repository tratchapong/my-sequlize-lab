const data = [
  { name : 'ABC', age: 25},
  { name : 'DEF', age: 35},
  { name : 'GHI', age: 45},
  { name : 'JKL', age: 55},
  { name : 'MNO', age: 22},
]

getAll = () => {
  return data
}

getOne = (i) => {
  if (i > data.length) return { err : `not more than : ${data.length}` }
  if (data[i-1] === undefined) return { err : "Not found!!!" }
  return data[i-1]
}

findName = (n) => {
  // console.log(data.filter( x=> x.name.includes(n)))
  return data.filter( x=> x.name.includes(n) )
}

module.exports = {getAll, getOne, findName}

