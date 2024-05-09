import { useNavigation } from '@react-navigation/native'
import { Box, Text, Theme } from '../utils/theme'
import { CategoriesNavigationType } from '../../navigation/types'
import { Pressable } from 'react-native'
import { useTheme } from '@shopify/restyle'
import { Feather } from "@expo/vector-icons"
const CreateNewList = () => {


  const navigation = useNavigation<CategoriesNavigationType>()
  const navigateToCreateCategory = () => {
    navigation.navigate("CreateCategory", {})
  }
  const theme = useTheme<Theme>()

  return (
    <Pressable onPress={navigateToCreateCategory}>
      <Box
        p='4'
        bg='lightGray'
        borderRadius='rounded-5xl'
        flexDirection='row'
        alignItems='center'>
        <Feather name='plus' size={24} color={theme.colors.gray5} />
        <Text variant='textXl' fontWeight="600" color='grey'>Create new list</Text>
      </Box>
    </Pressable>
  )
}

export default CreateNewList
