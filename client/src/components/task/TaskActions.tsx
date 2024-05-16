import { Pressable, TextInput } from 'react-native'
import { Box, Text } from '../utils/theme'
import { useState } from 'react'
import { ICategory, ITaskRequest } from '../../types'
import { format, isToday } from "date-fns"
import useSWR from 'swr'
import Loader from '../shared/Loader'

type TaskActionsProps = {
  categoryId: string
}

const todaysISODate = new Date().toISOString()


const TaskActions = ({ categoryId }: TaskActionsProps) => {
  const [newTask, setNewTask] = useState<ITaskRequest>({
    categoryId: categoryId,
    date: todaysISODate,
    isCompleted: false,
    name: ""
  })

  const [currentCategory, setCurrentCategory] = useState<ICategory>()

  const {data:categories, isLoading} = useSWR<ICategory[]>("category")

  if (isLoading) {
    return <Loader />
  }

  const selectedCategory = categories?.find((_category)=> _category._id ===categoryId)

  return (
    <Box bg='lightGray' px='4' py='4' mx='4' mt='4'  borderRadius='rounded-5xl' flexDirection='row'>
      <TextInput placeholder='Create a new task' style={{
        fontSize: 20
      }}
        maxLength={36}
        textAlign='center'
        value={newTask.name}
        onChangeText={(text) => {
          setNewTask((prev) => {
            return {
              ...prev,
              name: text,
            }
          })
        }}
      />

      <Box flexDirection='row' alignItems='center'>
        <Pressable>
          <Box flexDirection='row' alignContent='center' bg='white' p='2' borderRadius='rounded-xl'>
            <Text>
              {isToday(new Date(newTask.date))
                ? "Today"
                : format(new Date(newTask.date), "yyyy-MM-dd")}

            </Text>
          </Box>
        </Pressable>
        <Box height={12} />
        <Pressable>
          <Box bg='white' flexDirection='row' alignItems='center' p='2' borderRadius='rounded-xl' ml='4'>
            <Box
              width={12}
              height={12}
              borderRadius='rounded'
              borderWidth={2}
              mr='1'
              style={{
                borderColor:selectedCategory?.color.code 
              }}
            ></Box>
              <Text style={{color:selectedCategory?.color.code}}>{selectedCategory?.name}</Text>
          </Box>
        </Pressable>
      </Box>
    </Box>
  )
}

export default TaskActions
