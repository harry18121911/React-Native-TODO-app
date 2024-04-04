import { CustomRequest } from "../middleware";
import { Response } from "express";
import Task from "../models/taskModel";
import { ITask } from "../types";

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

export const createTask = async (req:CustomRequest,res:Response) =>{
  try {
    const userId = req.user
    const {name, date, categoryId, }:ITask =req.body
    const task = await Task.create({
      name,
      date,
      categoryId,
      user: userId
    })
    res.send(task)
  } catch (error) {
    console.log("Error in createTask", error)
    res.send({error:"Error white creating task"})
    throw error
  }
}
