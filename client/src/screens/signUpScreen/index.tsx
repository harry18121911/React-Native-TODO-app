import { Box, Text } from '../../components/utils/theme'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '../../navigation/types'

const SignUpScreen = () => {
  const navigation= useNavigation<AuthScreenNavigationType<"SignUp">>()
  const navigateToSignInScreen = () =>{
    navigation.navigate("SignIn")
  }

  return (
   <Box>
      <Text>Sign up screen</Text>
      <Button title="Navigate to sign in" onPress={navigateToSignInScreen}></Button>
    </Box> 
  )
}

export default SignUpScreen

