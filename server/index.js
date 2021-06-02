const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('config')
const { default: axios } = require('axios')

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

app.get('/temp', (req, resp) => {
    axios.get("https://api.thingspeak.com/channels/1406130/feeds.json?api_key=5HZ943Q95CLFNXDN&results=2").then(res => {
        data = res.data.feeds
        resp.json({
            data: data
        })
    })
})

app.get('/hum', (req, resp) => {
    axios.get("https://api.thingspeak.com/channels/1406128/feeds.json?api_key=NHQ4N78D3RY4L7ID&results=2").then(res => {
        data = res.data.feeds
        resp.json({
            data: data
        })
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('server is up and running')
})