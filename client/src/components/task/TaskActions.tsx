import { Pressable, TextInput } from 'react-native'
import { Box, Text } from '../utils/theme'
import { useState } from 'react'
import { ITaskRequest } from '../../types'
import { format, isToday } from "date-fns"
type TaskActionsProps ={
  categoryId: string
}

const todaysISODate= new Date().toISOString()


const TaskActions = ({categoryId} :TaskActionsProps) => {
  const [newTask, setNewTask] = useState<ITaskRequest>({
    categoryId:categoryId,
    date:todaysISODate,
    isCompleted: false,
    name:""
  })


  return (
    <Box bg='lightGray' px='4' py='4' mx='4'mt='4' borderRadius='rounded-5xl'>
      <TextInput placeholder='Create a new task' style={{
        fontSize:20
      }}
        maxLength={36}  
        textAlign='center'
        value={newTask.name}
        onChangeText={(text)=>{
          setNewTask((prev) =>{
            return {
              ...prev,
              name:text,
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
      </Box>
    </Box>
  )
}

export default TaskActions
