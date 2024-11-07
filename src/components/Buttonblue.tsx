import { View, Text, Pressable } from 'react-native'
import React from 'react'
interface ButtonBlue{
  title:any,
  action?:() => void;
  children?: React.ReactNode
}

const ButtonOutline: React.FC<ButtonBlue> = ({
  title,
  action,
  children,
} :ButtonBlue) => {
  return (
    <Pressable
    className='border-2 bg-[#0082CD]   borderWidth-0 rounded-lg justify-center items-center py-3 flex-row'
    onPress={action}
    >
      {children &&  <View>{children}</View>}
      <Text className='text-white font-bold text-lg'>{title}</Text>
    </Pressable>
  )
}

export default ButtonOutline
