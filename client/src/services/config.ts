import axios from "axios"
import * as SecureStore from "expo-secure-store"
//192.168.100.16:8081
export const BASE_URL = "http://192.168.100.16:8080/"  
// export const BASE_URL = "https://production-blossom-app.onrender.com/"

const TIME_OUT = 30000
export const REACTNATIVEKEY= "reactnativekey"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})

export const saveToken = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value)
  } catch (error) {
    console.log("error in saveToken", error)
    throw error
  }
}

axiosInstance.interceptors.request.use(async (req) => {
  try {
    const access_token = await SecureStore.getItemAsync("reactnativekey")
    req.headers.Authorization = access_token
    return req
  } catch (error) {
    return req
  }
})

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data)

export default axiosInstance
