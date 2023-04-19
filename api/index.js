
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./src/routes/indexRouter')

const { connect } = require('./db')


const server = express()
const PORT = process.env.PORT || 3001

server.use(express.json())
server.use(morgan('dev'))
server.use(cors())
server.use('/', router)



server.listen(PORT, connect.sync({force:false}).then(()=>console.log(`The server is listen in port: ${PORT} 
GET: http://localhost:${PORT} `)))