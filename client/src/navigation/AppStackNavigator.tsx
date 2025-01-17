import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppStackParamList } from './types'
import BottomTabNavigator from './BottomTabNavigator'
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStackNavigator= () => {
  return (
  <Stack.Navigator  screenOptions={{ headerTitleAlign: "center" }} > 
    <Stack.Screen name="Root" component={BottomTabNavigator}
    options={{
      headerShown:false,
    }}
    />
  </Stack.Navigator>
  )
}


export default AppStackNavigator

