import { Box, Text } from '../components/utils/theme'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '../navigation/types'
import SafeAreaWrapper from '../components/shared/SafeAreaWrapper'

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>()
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp")
  }

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Sign in screen</Text>
        <Button title="Navigate to sign up" onPress={navigateToSignUpScreen}></Button>
      </Box>
    </SafeAreaWrapper>
  )
}

export default SignInScreen

