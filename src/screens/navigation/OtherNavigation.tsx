import { View, Text } from 'react-native'
import React from 'react'
import {TransitionPresets, createStackNavigator } from '@react-navigation/stack';
//import GroupCall from '../tabs/mentee/home/GroupcallDetails';

const Stack = createStackNavigator();
const OtherNavigation = () => {
  return (
        // <Stack.Navigator
        // screenOptions={{headerShown: false,
        //                 ...TransitionPresets.SlideFromRightIOS,
        //                 animationEnabled: true,
        //               gestureEnabled: true,
        //             gestureDirection: 'horizontal',}
        // }>
        //   {/* //  <Stack.Screen name='GroupCall' component={GroupCall} /> */}

        // </Stack.Navigator>
        <View  className='bg-black flex-1 justify-center items-center'>
          <Text className="text-white text-3xl font-semibold">AuthNavigation</Text>
        </View>
      )
}

export default OtherNavigation
