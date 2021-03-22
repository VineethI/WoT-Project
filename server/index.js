const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('server is up and running')
})