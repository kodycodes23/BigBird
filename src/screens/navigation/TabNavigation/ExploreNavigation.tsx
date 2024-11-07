import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import ExploreScreen from '../../tabs/mentee/explore/Explore';


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
      <Stack.Screen name="Explore" component={ExploreScreen}/>
      {/* <Stack.Screen name="GroupCall" component={GroupcallDetails}/> */}
    </Stack.Navigator>
  )
}

export default ExploreNavigation
