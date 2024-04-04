import express, { RequestHandler } from 'express'
import { authenticationMiddleware } from '../middleware'
import { createTask, getAllTask, toggleTaskStatus } from '../controllers/taskController'

const taskRoutes = express.Router() 

taskRoutes.use(authenticationMiddleware as unknown as RequestHandler)

taskRoutes.get("/", getAllTask as unknown as RequestHandler)

taskRoutes.post("/create", createTask as unknown as RequestHandler)

taskRoutes.put("/update/:id", toggleTaskStatus as unknown as RequestHandler)

export default taskRoutes
