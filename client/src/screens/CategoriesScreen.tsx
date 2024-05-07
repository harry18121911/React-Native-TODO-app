import useSWR from 'swr'
import SafeAreaWrapper from '../components/shared/SafeAreaWrapper'
import { Box, Text } from '../components/utils/theme'
import { fetcher } from '../services/config'
import Loader from '../components/shared/Loader'
import { FlatList } from 'react-native'
import { ICategory } from '../types'
import Category from '../components/categories/Category'
import CreateNewList from '../components/categories/CreateNewList'

const CategoriesScreen = () => {
  const { data, isLoading, error } = useSWR("category", fetcher)
  if(isLoading){
    return <Loader/>
  }

  const renderItem = ({item}: {item:ICategory}) => (
 <Category category={item}/>
 )


  return (
    <SafeAreaWrapper>
      <Box flex={1} px='4'>
        <Text variant='textXl' fontWeight='700' mb='10'>Categories</Text>
        <FlatList
        data={data}
          showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ItemSeparatorComponent={()=><Box height={14}/>}
        keyExtractor={(item) =>item._id}
        />
        <CreateNewList/>
      </Box>
    </SafeAreaWrapper>
  )
}

export default CategoriesScreen
