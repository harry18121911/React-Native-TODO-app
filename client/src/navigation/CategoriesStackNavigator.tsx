import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CategoriesStackParamList } from './types'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryScreen from '../screens/CategoryScreen'
const Stack = createNativeStackNavigator<CategoriesStackParamList>()


const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }} >
      <Stack.Screen name="Categories" component={CategoriesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Category" component={CategoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}


export default CategoriesStackNavigator

