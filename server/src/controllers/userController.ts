import {Request, Response } from 'express'
import User from '../models/userModel'
import bcrypt from 'bcrypt'
import { Types } from 'mongoose'
import jwt from 'jsonwebtoken'
import { IUser } from '../types'
const getUserToken = (_id:string|Types.ObjectId)=>{
  const authenticatedUserToken = jwt.sign({_id}, "express", {
    expiresIn: "7d",
  })
  return authenticatedUserToken
}

export const createUser = async (req:Request, res:Response) =>{
  try {
    const {name, email, password} = req.body
    const existingUser = await User.findOne({email})
    if (existingUser){
      return res.status(409).send("User already exist")
    }

    const hashedPassword = await bcrypt.hash(password,12)

    const user = await User.create({
      name: name,
      email:email,
      password:hashedPassword
    })
  return res.status(201).send({message:"User create successfully",user})
  } catch (error) {
    console.log("Error in create user api", error)
    throw (error)
  }
}

export const loginUser = async (req:Request,res:Response) =>{
  try{
    const {email, password}:IUser = req.body
    const existingUser = await User.findOne({email})
    if(!existingUser){
      return res.status(409).send({message:"User does not exist"})
    }
    const isPasswordIdentical = await bcrypt.compare(password, existingUser.password )
    if(isPasswordIdentical){
      const token = getUserToken(existingUser._id)
      return res.send({
        token,
        user:{
          email:existingUser.email,
          name: existingUser.name,
        }
      })
    }else{
        return res.status(400).send({message: "Wrong credentials"})
    }
  } catch (error){
    console.log('Error in Login User', error)
    return (error)
  }
}
