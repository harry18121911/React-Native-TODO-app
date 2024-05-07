import { useNavigation } from '@react-navigation/native'
import { Box, Text } from '../utils/theme'
import { CategoriesNavigationType } from '../../navigation/types'

const CreateNewList = () => {
  const navigation = useNavigation<CategoriesNavigationType>()
  const navigateToCreateCategory=()=>{
    navigation.navigate("CreateCategory",{})
  }
  return (
    <Box>
      <Text>Create new list</Text>
    </Box>
  )
}

export default CreateNewList
