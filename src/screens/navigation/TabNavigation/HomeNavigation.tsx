import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../tabs/mentee/home/HomeScreen'
import GroupcallDetails from '../../tabs/mentee/home/GroupcallDetails';
import MentorDetails from '../../tabs/mentee/home/MentorDetails'
import Notifications from '../../tabs/mentee/home/Notifications';


  const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
      animationEnabled: true,
      gestureEnabled: true,
      gestureDirection: "horizontal"
    }}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="GroupCall" component={GroupcallDetails}/>
      <Stack.Screen name="MentorDetails" component={MentorDetails}/>
      <Stack.Screen name="Notifications" component={Notifications}/>
    </Stack.Navigator>
  );
}

export default HomeNavigation
