require('dotenv').config()
require('./config/db')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const app = express()

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

app.use(cors())

app.use(logger('dev'))
app.use(express.json())

app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

// API routes
app.use(require('./config/checkToken'))

app.use('/api/users', require('./routes/api/users'))
app.use('/api/reviews', require('./controllers/api/reviews'))
app.use('/api/movies', require('./controllers/api/movies'))
app.get('/api/test', (req, res) => {
  res.json({ test: 'the api is working' })
})

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001

app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
})
