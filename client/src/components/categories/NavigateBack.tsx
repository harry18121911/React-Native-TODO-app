import { Pressable } from 'react-native'
import { Box, Text, Theme } from '../utils/theme'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'

const NavigateBack = () => {
  const navigation = useNavigation()
  const theme = useTheme<Theme>()
  const navigateBack = () => {
    navigation.goBack()
  }
  return (
    <Pressable onPress={navigateBack}>
      <Box bg='gray200' p='2' borderRadius='rounded-7xl'>
        <Ionicons name='chevron-back' size={24} color={theme.colors.gray9} />
      </Box>
    </Pressable>
  )
}

export default NavigateBack
