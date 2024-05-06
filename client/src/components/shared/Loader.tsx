import SafeAreaWrapper from './SafeAreaWrapper'
import { ActivityIndicator } from 'react-native'
import { Box } from '../utils/theme'

const Loader = () => {
  return (

    <SafeAreaWrapper>
 
    <Box flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator/>
    </Box>

    </SafeAreaWrapper>
  )
}

export default Loader
