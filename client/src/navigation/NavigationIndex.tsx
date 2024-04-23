import { NavigationContainer } from '@react-navigation/native'
import AppStackNavigator from './AppStackNavigator'
import { useEffect } from 'react'
import useUserGlobalStore from '../store/userGlobalStore'
import AuthStackNavigator from './AuthStackNavigator'
const Navigation = () => {
  const { user, updateUser } = useUserGlobalStore()

  console.log(`user`, JSON.stringify(user, null, 2))

  useEffect(() => {
    updateUser(null)
    return () => {
    }
  }, [])
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

