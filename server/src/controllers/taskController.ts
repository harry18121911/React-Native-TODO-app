import { CustomRequest } from "../middleware";
import { Response } from "express";
import Task from "../models/taskModel";
import { ITask } from "../types";

export const getAllTask = async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.user
    const tasks = await Task.find({
      user: userId,
    })
    res.send(tasks)
  } catch (error) {
    console.log("Error in getAllTask", error)
    res.send({ error: "Error whilte fetching task" })
    throw error
  }
}

export const getAllTaskByCategory = async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.user
    const { id } = req.params
    const tasks = await Task.find({
      user: userId,
      categoryId: id,
    })
    res.send(tasks)
  } catch (error) {
    console.log("Error in getAllTaskByCategory", error)
    res.send({ error: "Error while fetching tasks" })
    throw error
  }
}

export const getAllCompletedTask = async (req:CustomRequest, res:Response )=>{
  try {
    const userId = req.user
    const tasks = await Task.find({
      user: userId,
      isCompleted: true,
    })
    res.send(tasks)
  } catch (error) {
    console.log("error in getAllCompletedTask", error)
    res.send({error: "Error while fetching task"})
    throw error
  }
}

export const getTaskForToday = async (req:CustomRequest, res: Response) =>{
  try {
    const userId = req.user
    const todayISODate = new Date()
    todayISODate.setHours(0, 0, 0, 0)
    const tasks = await Task.find({
      user:userId,
      date: todayISODate.toISOString(),
    })
    res.send(tasks)
  } catch (error) {
    console.log("Error in getTaskForToday API", error)
    res.send({message:"Error in getting task for today"})
    throw error
  }
}

export const createTask = async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.user
    const { name, categoryId, }: ITask = req.body
    const todayISODate = new Date()
    todayISODate.setHours(0, 0, 0, 0)
    const task = await Task.create({
      name,
      date: todayISODate.toISOString(),
      categoryId,
      user: userId
    })
    res.send(task)
  } catch (error) {
    console.log("Error in createTask", error)
    res.send({ error: "Error white creating task" })
    throw error
  }
}

export const toggleTaskStatus = async (req: CustomRequest, res: Response) => {
  try {
    const { isCompleted } = req.body
    const { id } = req.params

    const task = await Task.updateOne(
      {
        _id: id,
      },
      {
        isCompleted
      }
    )
    res.send(task)
  } catch (error) {
    console.log("Error in toggleTaskStatus", error)
    res.send({ error: "Error is toggleTaskStatus" })
    throw error
  }
}

export const deleteTask = async (req: CustomRequest, res: Response) => {
  try {
    const { id } = req.params
    await Task.deleteMany({ _id:id })
    res.send({ message: "Task deleted" })
  } catch (error) {
    console.log("Error in deleteTask", error)
    res.send({error:"Error in deleteTask"})
    throw error
  }
}

export const editTask = async (req: CustomRequest, res: Response)=>{
  try {
    const { id } = req.params
    const { categoryId, date, name } :ITask =req.body
    await Task.updateOne({
      _id:id,
    },{
        $set:{
          name,
          categoryId,
          date,
        },
      })
    res.send({ message: "Task updated"})
  } catch (error) {
    console.log("Error in editTask", error)
    res.send({error:"Error editing task"})
    throw error
  }
}
