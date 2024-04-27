import {   TextInput, TextInputProps } from 'react-native'
import theme, { Box, Text } from '../utils/theme'

type CustomInputProps = {
  label: string,
  error?: undefined
} & TextInputProps

const CustomInput = ({label}:CustomInputProps) => {
  return (
   <Box flexDirection='column' mb='6'>
    <Text variant='textXs' textTransform='uppercase' mb='4'>
        {label}
      </Text>
      <TextInput
        style={{
          padding:16,
          borderWidth:1,
          borderColor: theme.colors.grey,
          borderRadius: theme.borderRadii["rounded-7xl"]
        }}
        placeholder={"Email"}
      />
    

    </Box>
  )
}

export default CustomInput

