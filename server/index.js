const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

app.use(cors())
app.use(express.json())

const db = config.get('mongoURI')

mongoose.connect(db, {useNewUrlParser: true, useCreateIndex: true}).then(() => {
    console.log('MongoDB Connected')
}).catch(err => {
    console.log(err)
})

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('server is up and running')
})