import { View, Text } from 'react-native'
import React from 'react'
import {useState, useEffect } from 'react'
import { StyleSheet, Alert, Image, Pressable, ActivityIndicator } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { MaterialIcons } from '@expo/vector-icons'



interface Props{
  size: number,
  url: string | null,
  onUpload: (filepath: string) => void ;
  showUpload: boolean
}
const Avatar = ({url, size=150, onUpload, showUpload} : Props) => {

  const [ uploading , setUploading] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState <string | null>(null)

  const avatarSize = {height:size, width: size}

  useEffect(() => {
    if (url) downloadImage(url)

    },[url])

    async function downloadImage (path: string){
      try{
        //
      }catch(error){
        //
      }

    }
  
  return (
    <View>
      <Text>Avatar</Text>
    </View>
  )
}

export default Avatar
