import express, { RequestHandler } from 'express'
import { authenticationMiddleware } from '../middleware'
import { createTask, deleteTask, editTask, getAllCompletedTask, getAllTask, getAllTaskByCategory, getTaskForToday, toggleTaskStatus } from '../controllers/taskController'

const taskRoutes = express.Router() 

taskRoutes.use(authenticationMiddleware as unknown as RequestHandler)

taskRoutes.get("/", getAllTask as unknown as RequestHandler)

taskRoutes.get("/task-by-categories/:id", getAllTaskByCategory as unknown as RequestHandler)

taskRoutes.get("/completed", getAllCompletedTask as unknown as RequestHandler)

taskRoutes.get("/today", getTaskForToday as unknown as RequestHandler)

taskRoutes.put("/edit/:id", editTask as unknown as RequestHandler)

taskRoutes.post("/create", createTask as unknown as RequestHandler)

taskRoutes.put("/update/:id", toggleTaskStatus as unknown as RequestHandler)

//TODO Implement delete task 
taskRoutes.delete("/delete/:id", deleteTask as unknown as RequestHandler)

export default taskRoutes
