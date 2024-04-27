import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackParamList } from './types'
import WelcomeScreen from '../screens/WelcomeScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
const Stack = createNativeStackNavigator<AuthStackParamList>()


const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }} >
      <Stack.Screen name="Welcome" component={WelcomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="SignIn" component={SignInScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}


export default AuthStackNavigator

