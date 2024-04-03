import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import {connectDB} from './db'
import userRoutes from './src/routes/userRoutes'
import categoriesRoutes from './src/routes/categoriesRoutes'
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
app.use("/user", userRoutes)
app.use("/category", categoriesRoutes)
//listen

app.listen(PORT,()=>{
   console.log(colors.bgGreen(colors.black(`Server Listening on PORT: ${PORT}`)))
})
