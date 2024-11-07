import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useColorScheme} from 'nativewind'
import Animated, {FadeInRight} from 'react-native-reanimated'
import {Image} from 'expo-image'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { AnimatedView } from 'react-native-reanimated/lib/typescript/reanimated2/component/View'

const SplashScreen = () => {
  const {colorScheme, toggleColorScheme} =useColorScheme()
  const{navigate} : NavigationProp<SplashNavigationTypes> = useNavigation();
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  useEffect(() => {
     setTimeout(() =>{
       navigate("Welcome");
     }, 2000);
  }, [] );


  return (
    <SafeAreaView className='flex-1 justify-center items-center '>
      <StatusBar style='auto'/>
      <View className='w-full px-4 items-center'>
        <Animated.View className="flex-row justify-center items-center"
        entering={FadeInRight.duration(100).springify()}
        >
          <View className='pr-2'>
            <View className='w-40 h-40 overflow-hidden'>
              <Image
                source={require("../../../assets/images/logo.png")}
                placeholder={blurhash}
                contentFit='cover'
                transition={1000}
                className='w-full h-full flex-1'
              />
            </View>
          </View>
        </Animated.View>
        {/* <Animated.View
        className="flex-row justify-center items-center"
        ></Animated.View> */}

      </View>
      {/* <Text className="text-white">SplashScreen</Text> */}
    </SafeAreaView>
  )
}

export default SplashScreen
