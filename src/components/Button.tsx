import { View, Text, Pressable } from 'react-native'
import React from 'react'
interface ButtonProps{
  title:any,
  action?:() => void
}

const Button: React.FC<ButtonProps> = ({
  title,
  action,
} :ButtonProps) => {
  return (
    <Pressable
    className='bg-[#2ab07c] rounded-lg borderwidth-0 justify-center items-center py-3 w-full'
    onPress={action}
    >
      <Text className='text-wite font-bold text-lg'>{title}</Text>
    </Pressable>
  )
}

export default Button

