import { CustomRequest } from "../middleware";
import { Response } from "express";
import Task from "../models/taskModel";

export const getAllTask = async (req:CustomRequest,res:Response) =>{
  try {
    const userId = req.user
    const tasks = await Task.find({
      user: userId,
    })
    res.send(tasks)
  } catch (error) {
    console.log("Error in getAllTask", error)
    res.send({ error: "Error whilte fetching task"})
    throw error
  }
}
