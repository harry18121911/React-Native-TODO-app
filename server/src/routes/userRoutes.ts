import express from 'express'
import { createUser, loginUser } from '../controllers/userController'

const userRoutes = express.Router()

userRoutes.post("/create", createUser)
userRoutes.post("/login", loginUser)

export default userRoutes
