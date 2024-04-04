import express, { RequestHandler } from 'express'
import { authenticationMiddleware } from '../middleware'
import { getAllTask } from '../controllers/taskController'

const taskRoutes = express.Router()

taskRoutes.use(authenticationMiddleware as unknown as RequestHandler)

taskRoutes.get("/", getAllTask as unknown as RequestHandler)

export default taskRoutes
