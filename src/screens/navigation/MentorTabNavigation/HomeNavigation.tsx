import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../tabs/mentor/home/HomeScreen'
import Groupcall from '../../tabs/mentor/home/GroupCall';
import CallRequest from '../../tabs/mentor/home/CallRequest'
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
      <Stack.Screen name="GroupCall" component={Groupcall}/>
      <Stack.Screen name="CallRequest" component={CallRequest}/>
      <Stack.Screen name="Notifications" component={Notifications}/>
    </Stack.Navigator>
  );
}

export default HomeNavigation
