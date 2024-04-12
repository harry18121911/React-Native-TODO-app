import { NavigationContainer } from '@react-navigation/native'
import AppStackNavigator from './AppStackNavigator'
const Navigation = () => {
  const user = true

  return (
    <NavigationContainer>
      {/*<AuthStackNavigator/>*/}
    <AppStackNavigator/>
    </NavigationContainer>
  )

}

export default Navigation

