
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001']
}))

app.use(express.json())
app.use(express.static('public'))
app.use('/user', require('./routes/userRoute'))

app.listen(port, () => console.log(`server running on http://localhost:${port}`))
