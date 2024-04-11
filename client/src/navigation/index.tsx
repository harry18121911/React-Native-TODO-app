import { NavigationContainer } from '@react-navigation/native'
import AuthStackNavigator from './AuthStackNavigator'
const Navigation= () => {

  return <NavigationContainer>
    <AuthStackNavigator/>
  </NavigationContainer>
    
  
}

export default Navigation

