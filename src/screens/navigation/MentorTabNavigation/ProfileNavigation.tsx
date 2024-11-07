import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../../tabs/mentee/profile/ProfileScreen'
import Preference from '../../tabs/mentor/profile/Preference'
import Settings from '../../tabs/mentor/profile/SettingScreen'
import EditProfile from '../../tabs/mentor/profile/ProfileScreen1'

const Stack = createStackNavigator();
const ProfileNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
      animationEnabled: true,
      gestureEnabled: true,
      gestureDirection: "horizontal"
    }}>
      <Stack.Screen name="Profile" component={ProfileScreen}/>
      <Stack.Screen name="Preference" component={Preference}/>
      <Stack.Screen name="Settings" component={Settings}/>
      <Stack.Screen name="Edit" component={EditProfile}/>

    </Stack.Navigator>
  )
}

export default ProfileNavigation
