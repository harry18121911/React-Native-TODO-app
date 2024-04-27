import { Box, Text } from '../components/utils/theme'
import  Button  from '../components/shared/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '../navigation/types'
import SafeAreaWrapper from '../components/shared/SafeAreaWrapper'
import CustomInput from '../components/shared/CustomInput'
import { Pressable } from 'react-native'

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>()
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn")
  }

  return (
    <SafeAreaWrapper>
      <Box my='4' mx='6'>
        <Text variant='textXl' fontWeight='700' >Welcome to Journey</Text>
        <Text variant='textXl' fontWeight='700' mb='6' >Your journey starts here</Text>
        <CustomInput label='Name'/>
        <CustomInput label='Email'/>
        <CustomInput label='Password'/>
        <Pressable onPress={navigateToSignInScreen}>
          <Text color='primary' textAlign='right'>
            Log in?
          </Text>
        </Pressable>
        <Box mb='6'/>
        <Button label="Register" onPress={()=>console.log("TODO implement register")} onLongPress={()=>console.log("Dummy")} uppercase></Button>

      </Box>
    </SafeAreaWrapper>
  )
}

export default SignUpScreen

