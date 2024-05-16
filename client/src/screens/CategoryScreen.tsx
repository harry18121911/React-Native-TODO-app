import { RouteProp, useRoute } from '@react-navigation/native'
import SafeAreaWrapper from '../components/shared/SafeAreaWrapper'
import { Box, Text } from '../components/utils/theme'
import { CategoriesStackParamList } from '../navigation/types'
import useSWR from 'swr'
import { fetcher } from '../services/config'
import Loader from '../components/shared/Loader'
import { ICategory } from '../types'
import NavigateBack from '../components/categories/NavigateBack'
import TaskActions from '../components/task/TaskActions'

type CategoryScreenRouteProp = RouteProp<CategoriesStackParamList, "Category">

const CategoryScreen = () => {

  const route = useRoute<CategoryScreenRouteProp>()

  const { id } = route.params

  const { data: category, isLoading: isLoadingCategory } = useSWR<ICategory>(`category/${id}`, fetcher)

  console.log(`category`, JSON.stringify(category, null, 2))

  const { data: task, isLoading: isLoadingTask } = useSWR<ICategory>(`task/task-by-categories/${id}`, fetcher)


  console.log("data task by category ", JSON.stringify(task, null, 2))

  if (isLoadingTask || isLoadingCategory || !category) {
    return <Loader />
  }

  return (
    <SafeAreaWrapper>
      <Box width={40}>
        <NavigateBack />

      <Box height={16}/>
      </Box>
       {
category.map((category2: ICategory) => 

          <Box key={category2._id} flexDirection='row' >
            <Text variant='textXl' fontWeight="700" ml='3'>{category2.icon.symbol}</Text>
            <Text variant='textXl' fontWeight="700" ml='3' style={{
              color:category2.color.code
            }} >{category2.name}</Text>
          </Box>
        )
      }
      <Box>
      <TaskActions categoryId={id}/>
      </Box>
    </SafeAreaWrapper>
  )
}

export default CategoryScreen
