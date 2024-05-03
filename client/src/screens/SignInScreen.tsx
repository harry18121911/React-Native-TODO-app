import Button from "../components/shared/Button"
import Input from "../components/shared/CustomInput"
import SafeAreaWrapper from "../components/shared/SafeAreaWrapper"
import { AuthScreenNavigationType } from "../navigation/types"
import { loginUser } from "../services/api"
import { Box, Text } from "../components/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { Controller, useForm } from "react-hook-form"
import { Pressable } from "react-native"
import useUserGlobalStore from "../store/userGlobalStore"
const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>()
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp")
  }
    const { updateUser} = useUserGlobalStore()

    
    const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<IUser, "name">>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: Omit<IUser, "name">) => {
    try {
      const { email, password } = data
      await loginUser({
        email: email.toLowerCase(),
        password: password.toLowerCase(),
      })
      console.log("En teoria el usuario" )
    } catch (error) {
      console.log("Error in SignIn on summit")
    }
  }

return (
    <SafeAreaWrapper>
      <Box flex={1} px="5" mt={"10"}>
        <Text variant="textXl" fontWeight="700">
          Welcome to Journey!
        </Text>
        <Text variant="textXl" fontWeight="700" mb="6">
          Your journey starts here
        </Text>
        
        <Box mb="6" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              error={errors.email}
            />
          )}
          name="email"
        />
        <Box mb="6" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              error={errors.password}
              secureTextEntry
            />
          )}
          name="password"
        />
        <Box mt="5" />
        <Pressable onPress={navigateToSignUpScreen}>
          <Text color="primary" textAlign="right">
            Log in?
          </Text>
        </Pressable>
        <Box mb="5" />

        <Button label="Login" onPress={handleSubmit(onSubmit)} uppercase onLongPress={() => console.log("dummy")} />
      </Box>
    </SafeAreaWrapper>
  )
  
}

export default SignInScreen




