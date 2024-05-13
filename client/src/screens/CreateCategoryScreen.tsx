import { Pressable, TextInput } from 'react-native'
import NavigateBack from '../components/categories/NavigateBack'
import SafeAreaWrapper from '../components/shared/SafeAreaWrapper'
import { Box, Text, Theme } from '../components/utils/theme'
import { useTheme } from '@shopify/restyle'
import { useState } from 'react'
import { ICategory, ICategoryRequest, IColor, IIcon } from '../types'
import { getColors, getIcons } from '../components/utils/helpers/helpers'
import Button from '../components/shared/Button'
import useSWRMutation from 'swr/mutation'
import axiosInstance, { BASE_URL } from '../services/config'
import { useSWRConfig } from 'swr'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { CategoriesStackParamList } from '../navigation/types'

const COLORS = getColors()
const ICONS = getIcons()

const DEFAULT_COLOR = COLORS[0]
const DEFAULT_ICONS = ICONS[0]


const createCategoryRequest = async (url:string, {arg}:{arg:ICategoryRequest}) =>{
  try {
    console.log("Before axiosInstance")
    await axiosInstance.post(url,{
      ...arg
    })
    console.log("After axiosInstance")
  } catch (error) {
    console.log("Error in createCategoryRequest", error)
    throw (error)
  }
}

const updateCategoryRequest = async (url:string, {arg}:{arg:ICategoryRequest}) =>{
  try {
    console.log("Before axiosInstance")
    await axiosInstance.put(url,{
      ...arg
    })
    console.log("After axiosInstance")
  } catch (error) {
    console.log("Error in updateCategoryRequest", error)
    throw (error)
  }
}

type CreateCategoryRouteTypes = RouteProp<CategoriesStackParamList, "CreateCategory">


const CreateCategoryScreen = () => {
  const theme = useTheme<Theme>()
  const navigation = useNavigation()

  const route = useRoute<CreateCategoryRouteTypes>()

  const isEditing = route.params.category ? true : false

  const { trigger, isMutating} = useSWRMutation("category/create", createCategoryRequest)

  const { trigger:updateTrigger } = useSWRMutation("category/update", updateCategoryRequest)

  const { mutate } = useSWRConfig()

  const [newCategory, setNewCategory] = useState<Omit<ICategory, "_id" | "user" | "isEditable">>({
    name: route.params.category?.name ?? "",
    color: route.params.category?.color ?? DEFAULT_COLOR,
    icon: route.params.category?.icon ?? DEFAULT_ICONS,
  })

  console.log(`New category`, JSON.stringify(newCategory, null, 2))

  const createNewCategory = async () => {
    try {
      if(isEditing){
        const updateCategoryItem ={
          ...route.params.category,
          ...newCategory
        }
        await updateTrigger({
          ...updateCategoryItem
        })
      }else{
      console.log(`New Category` , JSON.stringify(newCategory, null, 2 ))
      await trigger({
        ...newCategory
      })}
      await mutate(BASE_URL+"category")
      navigation.goBack()
    } catch (error) {
      console.log("Error in createNewCategory", error)
      throw (error)
    }
  }

  const updateColor = (color: IColor) => {
    setNewCategory(prev => {
      return {
        ...prev,
        color,
      }
    })
  }

  const updateIcon = (icon: IIcon) => {
    setNewCategory(prev => {
      return {
        ...prev,
        icon,
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
            value={newCategory.name}
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
            <Text variant='textXs' fontWeight="600" color={newCategory.color.name as unknown as undefined}>Colors</Text>
          </Box>
          <Box flexDirection='row' justifyContent='space-evenly'>
            {
              COLORS.map(_color => {
                return (
                  <Pressable key={_color.id} onPress={() => { updateColor(_color) }}>
                    <Box style={{
                      backgroundColor: _color.code
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
        <Box height={24}/>
        <Box bg='gray200' p='4' borderRadius='rounded-2xl'>
          <Box bg='white' width={64} p='2' borderRadius='rounded-2xl' alignItems='center' mb='4'>
            <Text variant='textXs' fontWeight="600" color={newCategory.color.name as unknown as undefined}> {newCategory.icon.symbol}</Text>
            
          </Box>
          <Box flexDirection='row' justifyContent='space-evenly'>
            {ICONS.map(icon=> {
                return (
                  <Pressable key={icon.id} onPress={() => {updateIcon(icon) }}>
                    <Box  width={24} height={24} borderRadius='rounded-2xl'
                    >
                    <Text>{icon.symbol}</Text>

                  </Box>
                  </Pressable>
                )
              })}
          </Box>
        </Box>


        <Box
          style={{
            marginTop: "50%"
          }}
        >

          <Button label={isEditing ?  "Edit category" : 'Create New Category'} onPress={createNewCategory} onLongPress={() => console.log("Dummy")} />
        </Box>
      </Box>
    </SafeAreaWrapper>
  )
}

export default CreateCategoryScreen
