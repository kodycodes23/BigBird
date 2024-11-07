import { View, Text } from 'react-native'
import React from 'react'
import {TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../auth/SplashScreen';
import WelcomeScreen from '../auth/WelcomeScreen';
import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';
import Onboarding from '../auth/Onboarding';
// import index from '../tabs/mentee/home/HomeScreen'




const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS,
                    animationEnabled: true,
                  gestureEnabled: true,
                gestureDirection: 'horizontal',}
    }>
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Onboarding' component={Onboarding} />

        {/* <Stack.Screen name='Home' component={index} /> */}
    </Stack.Navigator>
    // <View  className='bg-black flex-1 justify-center items-center'>
    //   <Text className="text-white text-3xl font-semibold">AuthNavigation</Text>
    // </View>
  )
}

export default AuthNavigation
