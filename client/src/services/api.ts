import axiosInstance, { REACTNATIVEKEY, saveToken }  from "./config";

type RegisterUserTypes = IUser

//CHECK WHY THIS DOSENT WORK BUT DIRECTLY CODING IN THE SIGNUP SCREE DOES
export const registerUser = async ({
  email,
  name,
  password,
}: RegisterUserTypes) => {

  try {
    const response = await axiosInstance.post("user/create", {
      email,
      password,
      name,
    })
    return response.data.user
  } catch (error) {
    console.log("error in registerUser", error)
    throw error
  }
}

type LoginUserTypes = Omit<IUser,"name"> 

//CHECK WHY THIS DOSENT WORK BUT DIRECTLY CODING I fN THE SIGNUP SCREE DOES
export const loginUser = async ({
  email,
  password,
}: LoginUserTypes) => {

  try {
    const response = await axiosInstance.post("user/login", {
      email,
      password,
    })
    const _token = response.data.token 
    response.data.user
    axiosInstance.defaults.headers.common["Authorization"]=_token
    return  response.data.user
  } catch (error) {
    console.log("error in loginUser", error)
    throw error
  }
}


