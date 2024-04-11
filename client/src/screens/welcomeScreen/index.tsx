import { Box, Text } from '../../components/utils/theme'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '../../navigation/types'

const WelcomeScreen = () => {
  const navigation= useNavigation<AuthScreenNavigationType<"Welcome">>()
  const navigateToSignInScreen = () =>{
    navigation.navigate("SignIn")
  }
  const navigateToSignUpScreen = () =>{
    navigation.navigate("SignUp")
  }
  return (
   <Box>
      <Text>WELCOME SCREEN</Text>
      <Button title='Navigate to sign in' onPress={navigateToSignInScreen} />
      <Button title='Navigate to sign up' onPress={navigateToSignUpScreen} />

    </Box> 
  )
}

export default WelcomeScreen

