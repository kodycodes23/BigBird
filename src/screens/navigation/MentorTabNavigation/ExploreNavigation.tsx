import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import Available from '../../tabs/mentor/home/AvailableTime';


const Stack = createStackNavigator();
const ExploreNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
      animationEnabled: true,
      gestureEnabled: true,
      gestureDirection: "horizontal"
    }}>
      <Stack.Screen name="Explore" component={Available}/>
      {/* <Stack.Screen name="GroupCall" component={GroupcallDetails}/> */}
    </Stack.Navigator>
  )
}

export default ExploreNavigation
