import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import {connectDB} from './db'

//DOTENV
dotenv.config()

//MONGODB CONNECTION
connectDB()

//REST OBJECT
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//PORT
const PORT = process.env.PORT

//ROUTES
app.use('/api/v1/auth')
//listen

app.listen(PORT,()=>{
   console.log(colors.bgGreen(colors.black(`Server Listening on PORT: ${PORT}`)))
})
