import Button from "../components/shared/Button"
import Input from "../components/shared/CustomInput"
import SafeAreaWrapper from "../components/shared/SafeAreaWrapper"
import { AuthScreenNavigationType } from "../navigation/types"
import { registerUser } from "../services/api"
import { Box, Text } from "../components/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { Controller, useForm } from "react-hook-form"
import { Pressable } from "react-native"
import { IUser } from "../types"

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>()
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn")
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: IUser) => {
    try {
      const { email, name, password } = data
      const registeredUser = 
      await registerUser({
        email,
        name,
        password,
      })
      navigateToSignInScreen()
      return registeredUser
    } catch (error) {}
  }

    // direct register just in case
  {/*const onSubmit= async (data:IUser) => {
    const { name, email, password} = data
    try {
      const registerUser = await axios.post(`http://192.168.100.16:8080/user/create`,
        { name, email, password });
      console.log("Register Data==>", { name, email, password })
      return registerUser
    } catch (error) {
      alert("Error in register api front")
      console.log(error)
    }
  };*/}


return (
    <SafeAreaWrapper>
      <Box flex={1} px="5" mt={"10"}>
        <Text variant="textXl" fontWeight="700">
          Welcome to Blossom!
        </Text>
        <Text variant="textXl" fontWeight="700" mb="6">
          Your journey starts here
        </Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Name"
              error={errors.name}
            />
          )}
          name="name"
        />
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
              error={errors.name}
              secureTextEntry
            />
          )}
          name="password"
        />
        <Box mt="5" />
        <Pressable onPress={navigateToSignInScreen}>
          <Text color="primary" textAlign="right">
            Log in?
          </Text>
        </Pressable>
        <Box mb="5" />

        <Button label="Register" onPress={handleSubmit(onSubmit)} uppercase onLongPress={()=>console.log("Dummy")}/>
      </Box>
    </SafeAreaWrapper>
  )
}

export default SignUpScreen



