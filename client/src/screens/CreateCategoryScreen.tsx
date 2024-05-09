import { Pressable, TextInput } from 'react-native'
import NavigateBack from '../components/categories/NavigateBack'
import SafeAreaWrapper from '../components/shared/SafeAreaWrapper'
import { Box, Text, Theme } from '../components/utils/theme'
import { ColorProps, ResponsiveValue, backgroundColor, useTheme } from '@shopify/restyle'
import { useState } from 'react'
import { ICategory, IColor } from '../types'
import { getColors, getIcons } from '../components/utils/helpers/helpers'
import Button from '../components/shared/Button'

const COLORS = getColors()
const ICONS = getIcons()

const DEFAULT_COLOR = COLORS[0]
const DEFAULT_ICONS = ICONS[0]

const CreateCategoryScreen = () => {
  const theme = useTheme<Theme>()
  const [newCategory, setNewCategory] = useState<Omit<ICategory, "_id" | "user" | "isEditable">>({
    name: "",
    color: DEFAULT_COLOR,
    icon: DEFAULT_ICONS,
  })

  console.log(`New category`, JSON.stringify(newCategory, null, 2))

  const createNewCategory = async () => {
    try {

    } catch (error) {
      console.log("Error in createNewCategory", error)
      throw (error)
    }
  }

  const updateColor= (color:IColor)=>{
    setNewCategory(prev=>{
      return{ 
        ...prev,
        color,
      }
    })
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx='4'>
        <Box height={16} />
        <Box flexDirection='row' justifyContent='space-between' alignItems='center'>
          <NavigateBack />
        </Box>
        <Box height={16} />
        <Box bg='gray200' borderRadius='rounded-2xl' mb='4'>
          <TextInput
            style={{
              fontSize: 20,
              lineHeight: 26,
              padding: 16,
            }}
            maxLength={36}
            placeholder='Create new list'
            placeholderTextColor={theme.colors.gray5}
            onChangeText={(text) => {
              setNewCategory((prev) => {
                return {
                  ...prev,
                  name: text,
                }
              })
            }}
          />
        </Box>
        <Box bg='gray200' p='4' borderRadius='rounded-2xl'>
          <Box bg='white' width={64} p='2' borderRadius='rounded-2xl' alignItems='center' mb='4'>
            <Text variant='textXs'  fontWeight="600" color={newCategory.color.name as unknown as undefined}>Colors</Text>
          </Box>
          <Box flexDirection='row' justifyContent='space-evenly'>
          {
            COLORS.map(_color=>{
            return(
              <Pressable key={_color.id} onPress={()=>{updateColor(_color)}}>
                <Box style={{
                  backgroundColor:_color.code
                }}
                width={24}
                height={24}
                borderRadius='rounded-2xl'
                ></Box>
              </Pressable>
            )
          })}
        </Box>
        
      </Box>
        <Box
          style={{
            marginTop:"100%"
          }}  
        >

          <Button label='Create New Category' onPress={createNewCategory} onLongPress={() => console.log("Dummy")} />
        </Box>
      </Box>
    </SafeAreaWrapper>
  )
}

export default CreateCategoryScreen
