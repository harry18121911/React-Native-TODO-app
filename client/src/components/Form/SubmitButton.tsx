import {  Text , TouchableOpacity,StyleSheet, GestureResponderEvent} from 'react-native'

const SubmitButton = (props:{handleSubmit: ((event: GestureResponderEvent) => void),btnTitle:string,loading:boolean}) => {
  return (
  <TouchableOpacity style={styles.submitBtn} onPress={props.handleSubmit}>
      <Text style={styles.btnText}>
        { props.loading ? "Please Wait" : props.btnTitle }
      </Text>
  </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  submitBtn:{
    backgroundColor:"#1e2225",
    height:50,
    marginHorizontal:25,
    borderRadius:80,
    justifyContent:"center",
    marginBottom:20,
  },
  btnText:{
    color:"#ffffff",
    textAlign:"center",
    fontSize:24,
    fontWeight:"400",
  }
})

export default SubmitButton
