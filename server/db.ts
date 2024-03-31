import mongoose from "mongoose";
import colors from 'colors';

export const connectDB = async ()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL as string)
    console.log(colors.bgGreen(colors.black(`Connected to DATABASE ${mongoose.connection.host}`)))
  }catch(error){
    console.log(colors.bgRed(error as string))
  }
}
