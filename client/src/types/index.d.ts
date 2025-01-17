interface IUser {
    email: string,
    name: string,
    password: string
}

interface IAuthenticatedUser {
    email: string,
    password: string,
}

export interface IColor{
  name: string,
  id: string,
  code: string
}

export interface IIcon{
  name: string,
  id: string,
  symbol: string,
}

export interface ICategory{
  name: string,
  _id:string,
  user: IUser | string,
  isEditable: boolean,
  color:IColor,
  icon: IIcon,
  map?:Map
}


export interface ICategoryRequest{
  name: string,
  color:IColor,
  icon: IIcon
}

export interface ITask {
  _id:string,
  name:string,
  isCompleted:boolean,
  categoryId: string,
  createdAt: string,
  date: string,
}

export interface ITaskRequest {
  name:string,
  isCompleted:boolean,
  categoryId: string,
  date: string,
}

