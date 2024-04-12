import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {  HomeStackParamList } from './types'
import EditTaskScreen from './EditTaskScreen'
import HomeScreen from '../screens/HomeScreen'
const Stack = createNativeStackNavigator<HomeStackParamList>()


const HomeStackNavigator= () => {
  return (
  <Stack.Navigator  screenOptions={{ headerTitleAlign: "center" }} > 
    <Stack.Screen name="Home" component={HomeScreen}
    options={{
      headerShown:false,
    }}
    />
    <Stack.Screen name="EditTask" component={EditTaskScreen}
    options={{
      headerShown:false,
    }}
    />
  </Stack.Navigator>
  )
}


export default HomeStackNavigator

