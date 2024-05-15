import express,{RequestHandler} from 'express'
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from '../controllers/categoryController'
import { authenticationMiddleware } from '../middleware/index'
const categoryRoutes = express.Router()
categoryRoutes.use(authenticationMiddleware as unknown as RequestHandler)

categoryRoutes.get("/", (getAllCategories) as unknown as RequestHandler) 
categoryRoutes.post("/create", (createCategory ) as unknown as RequestHandler)
categoryRoutes.delete("/delete/:id", (deleteCategory) as unknown as RequestHandler) 
categoryRoutes.put("/update", (updateCategory) as unknown as RequestHandler) 
categoryRoutes.get("/:id",(getCategoryById) as unknown as RequestHandler)


export default categoryRoutes
