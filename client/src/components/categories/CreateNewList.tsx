import { useNavigation } from '@react-navigation/native'
import { Box, Text } from '../utils/theme'
import { CategoriesNavigationType } from '../../navigation/types'
import { Pressable } from 'react-native'
import SafeAreaWrapper from '../shared/SafeAreaWrapper'

const CreateNewList = () => {
  const navigation = useNavigation<CategoriesNavigationType>()
  const navigateToCreateCategory=()=>{
    navigation.navigate("CreateCategory",{})
  }
  return (
    <SafeAreaWrapper>
    <Pressable onPress={navigateToCreateCategory}>
    <Box>
      <Text>Create new list</Text>
    </Box>
    </Pressable>
    </SafeAreaWrapper>
  )
}

export default CreateNewList
