const { resolve } = require('path')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const userRouter = require('./routes/users')

const app = express()
const port = 3000

app.use(cors())
app.use(express.static(resolve(__dirname, 'public')))
app.use(express.json())
app.use(cookieParser())

app.use('/api/user', userRouter)

app.listen(port, () => {
  console.log(`Admin Server: http://localhost:${port}`)
})

module.exports = app
