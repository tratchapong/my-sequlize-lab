const express = require('express')
const userRoute = require('./routes/userRoute')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/users', userRoute)

app.use((req,res,next) => {
  res.status(404).json({msg: 'path not found'})
})

app.use((err, req, res, next)=> {
  console.log(err)
  res.status(500).json({msg: 'ERROR : ' + err.msg})
})

const port = 8000
app.listen(port, ()=>console.log('Server on port : ', port))
