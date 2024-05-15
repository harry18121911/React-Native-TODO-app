import { Response } from 'express'
import Category from '../models/categoryModel'
import { ICategory } from '../types/index'
import { CustomRequest } from '../middleware/index'

export const getAllCategories= async(req:CustomRequest,res:Response) =>{
  try {
    const { user} = req
    const categories = await Category.find({
      user:user,
    })
    return res.send(categories)
  } catch (error) {
    console.log("Error in get all categories", error)
    throw error
  }
}

export const getCategoryById = async(req:CustomRequest, res:Response) =>{
  try {
  const { id } = req.params
  const category = await Category.find({
      _id: id
    })
    res.send(category)
  } catch (error) {
    console.log("Error in getCategoryById",error)
    throw error
  }
}


export const createCategory= async(req:CustomRequest,res:Response) =>{
  try {
    const {color,icon, isEditable, name}:ICategory= req.body
    const { user } = req  
  
    const category = await Category.create({
      color,
      icon,
      isEditable,
      name,
      user
    })
    res.send(category)
  } catch (error) {
    console.log("Error in create category api", error)
    res.send({error:"Something went wrong"})
    throw error
  }
}

export const deleteCategory = async (req:CustomRequest,res:Response) =>{
  try {
    const {id} = req.params
    await Category.deleteMany({_id:id})
    res.send({ message : "Category deleted"})
  } catch (error) {
    console.log("Error in deleteCategory", error)
    res.send({error: "Something wrong in deleteCategory"})
    throw error
  }
}

export const updateCategory = async (req:CustomRequest,res:Response)=>{
 try {
  const {_id,color,icon,isEditable,name}: ICategory =req.body
  await Category.updateOne({
      _id,
    },
    {
        $set:{
          name,
          color,
          icon,
          isEditable,
        },
      }
    )
    res.send({message:"Category update successfully"})
  } catch (error) {
  console.log("Error in updateCategory", error)
  res.send({ error: "Error in updating category"})
  throw error
  }
}

