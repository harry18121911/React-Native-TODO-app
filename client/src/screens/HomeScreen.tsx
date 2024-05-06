import useSWR from 'swr'
import SafeAreaWrapper from '../components/shared/SafeAreaWrapper'
import { Box, Text } from '../components/utils/theme'
import { fetcher } from '../services/config'

const HomeScreen = () => {
  const {data} = useSWR("categories", fetcher)
  console.log(`data`, JSON.stringify(data))
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Home</Text>
      </Box>
    </SafeAreaWrapper>
  )
}

export default HomeScreen
