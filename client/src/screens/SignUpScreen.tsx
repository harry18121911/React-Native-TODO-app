import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '../navigation/types'
import axios from 'axios'
import { useState } from 'react'
import { View,  Text, Alert, StyleSheet } from 'react-native'
import InputBox from '../components/Form/InputBox'
import SubmitButton from '../components/Form/SubmitButton'
const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>()
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn")
  }

  //const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  //const [loading, setLoading] = useState(false); 
  
  const name = "dummy55"
  const email= "dummy55@dummy"
  const password = "1234"

  const registerAPI= async () => {
    try {
    
      await axios.post(`http://192.168.100.16:8080/user/create`,
        { name, email, password });
      console.log("Register Data==>", { name, email, password })
    } catch (error) {
      alert("Error in register api front")
      console.log(error)
    }
  };

  return (
    
<View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
     {/* <View style={{ marginHorizontal: 20 }}>
        <InputBox
          inputTitle={'Name'}
          value={name}
          setValue={setName}
          keyboardType={"name-phone-pad"}
          autoComplete={"name"}
          secureTextEntry={false}
        />
        <InputBox
          value={email}
          setValue={setEmail}
          inputTitle={'Email'}
          keyboardType={'email-address'}
          autoComplete={"email"}
          secureTextEntry={false}
        />
        <InputBox
          value={password}
          setValue={setPassword}
          inputTitle={'Password'}
          keyboardType={'name-phone-pad'}
          autoComplete={"current-password"}
          secureTextEntry={true}
        />
      </View>
       <Text>{JSON.stringify({name, email, password},null, 4)}</Text> */}
      <SubmitButton
        btnTitle="Register"
        loading={false}
        handleSubmit={registerAPI}
      />
     
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#CC99FF"
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e2225',
    marginBottom: 20,
  },
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "#af9f85",
  },
  linkText: {
    textAlign: "center",
  },
  link: {
    color: "red",
  }
})

export default SignUpScreen







