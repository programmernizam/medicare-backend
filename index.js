import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true
}

app.get('/', (req, res) => {
    res.send("Api is working")
})

// Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.listen(port, () => console.log('Server is running ' + port))