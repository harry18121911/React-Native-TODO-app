import { Box, Text } from '../components/utils/theme'
import  Button  from '../components/shared/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '../navigation/types'
import SafeAreaWrapper from '../components/shared/SafeAreaWrapper'
import CustomInput from '../components/shared/CustomInput'
import { Pressable } from 'react-native'

const SignInScreen = () => 
 {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>()
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp")
  }

  return (
    <SafeAreaWrapper>
      <Box my='4' mx='6'>
        <Text variant='textXl' fontWeight='700' >Welcome to Journey</Text>
        <Text variant='textXl' fontWeight='700' mb='6' >Your journey starts here</Text>
        <CustomInput label='Name'/>
        <CustomInput label='Email'/>
        <CustomInput label='Password'/>
        <Pressable onPress={navigateToSignUpScreen} >
          <Text color='primary' textAlign='right'>
            Register?
          </Text>
        </Pressable>
        <Box mb='6'/>
        <Button label="Login" onPress={()=>console.log("TODO implement login")} onLongPress={()=>console.log("Dummy")} uppercase></Button>

      </Box>
    </SafeAreaWrapper>
  )
}













export default SignInScreen

