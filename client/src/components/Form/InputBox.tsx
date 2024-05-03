import { Text, TextInput, View, StyleSheet, KeyboardTypeOptions } from 'react-native'
interface Props {
  value:string
  setValue:React.Dispatch<React.SetStateAction<string>>
  inputTitle: string
  secureTextEntry: boolean
  keyboardType: KeyboardTypeOptions
  autoComplete: 'additional-name' |
  'address-line1' |
  'address-line2' |
  'birthdate-day' |
  'birthdate-full' |
  'birthdate-month' |
  'birthdate-year' |
  'cc-csc' |
  'cc-exp' |
  'cc-exp-day' |
  'cc-exp-month' |
  'cc-exp-year' |
  'cc-number' |
  'country' |
  'current-password' |
  'email' |
  'family-name' |
  'given-name' |
  'honorific-prefix' |
  'honorific-suffix' |
  'name' |
  'new-password' |
  'off' |
  'one-time-code' |
  'postal-code' |
  'street-address' |
  'tel' |
  'username' |
  'cc-family-name' |
  'cc-given-name' |
  'cc-middle-name' |
  'cc-name' |
  'cc-type' |
  'nickname' |
  'organization' |
  'organization-title' |
  'url' |
  'gender' |
  'name-family' |
  'name-given' |
  'name-middle' |
  'name-middle-initial' |
  'name-prefix' |
  'name-suffix' |
  'password' |
  'password-new' |
  'postal-address' |
  'postal-address-country' |
  'postal-address-extended' |
  'postal-address-extended-postal-code' |
  'postal-address-locality' |
  'postal-address-region' |
  'sms-otp' |
  'tel-country-code' |
  'tel-device' |
  'tel-national' |
  'username-new'
}

const InputBox = (props: Props) => {

  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text>{props.inputTitle}</Text>
      <TextInput
        style={styles.inputBox}
        autoCorrect={false}
        autoComplete={props.autoComplete}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={(text)=>props.setValue(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "#af9f85",
  }
})


export default InputBox
