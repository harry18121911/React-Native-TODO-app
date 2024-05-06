import { NavigationContainer } from '@react-navigation/native'
import AppStackNavigator from './AppStackNavigator'
import useUserGlobalStore from '../store/userGlobalStore'
import AuthStackNavigator from './AuthStackNavigator'
const Navigation = () => {
  const { user} = useUserGlobalStore()

  console.log(`user`, JSON.stringify(user, null, 2))

 
  return (
    <NavigationContainer>
      {
        user ?
          <AppStackNavigator /> :

          <AuthStackNavigator />
      }

    </NavigationContainer>
  )

}

export default Navigation

