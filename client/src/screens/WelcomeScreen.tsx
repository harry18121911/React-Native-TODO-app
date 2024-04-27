import { Box, Text } from '../components/utils/theme'
import Button from '../components/shared/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '../navigation/types'
import SafeAreaWrapper from '../components/shared/SafeAreaWrapper'
import { LinearGradient } from 'expo-linear-gradient'
import { Image, StyleSheet } from 'react-native'


const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>()
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn")
  }
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp")
  }
  return (
    <SafeAreaWrapper>
      <LinearGradient
        colors={["#ffffff", "#fef8ff", "#fcecff", "#fae2ff", "#fef9ff", "#ffffff"]}
        style={{ flex: 1 }}>
        <Box flex={1} justifyContent='center' mb='4'>
          <Box alignItems='center'>
            <Image
            source={require('../../assets/FLOWER_SOMETHING.png')
              }
            style={style.image} 
              
            />
          </Box>
          <Text textAlign='center' variant='textXl' fontWeight='700'>Do you want to be more productive?</Text>
          <Box my='4' mx='10'>
            <Button label='Start your journey'
              onPress={navigateToSignUpScreen}
              onLongPress={() => console.log("Long Clicked")}
            >
            </Button>
          </Box>

        </Box>
      </LinearGradient>
    </SafeAreaWrapper>
  )
}
const style = StyleSheet.create({
  image:{
    width:120,
    height:120
  }
})



export default WelcomeScreen

