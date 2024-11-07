import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import ExploreNavigation from './ExploreNavigation';
import ProfileNavigation from './ProfileNavigation';
import WalletNavigation from './WalletNavigation';
import { TransitionPresets } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const MentorTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconSource;

          // Set the correct icon based on the route name
          if (route.name === "HomeNav") {
            iconSource = require('@/assets/images/home.png');
          } else if (route.name === "ExploreNav") {
            iconSource = require('@/assets/images/explore.png');
          } else if (route.name === "WalletNav") {
            iconSource = require('@/assets/images/wallet.png');
          } else if (route.name === "ProfileNav") {
            iconSource = require('@/assets/images/profile_icon.png');
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#2ab07c" : "gray",
              }}
            />
          );
        },
        tabBarLabel: "",
        tabBarActiveTintColor: '#2ab07c',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        ...TransitionPresets.SlideFromRightIOS,
        animationEnabled: true,
        gestureEnabled: true,
        gestureDirection: "horizontal"
      })}
    >
      <Tab.Screen name="HomeNav" component={HomeNavigation} />
      <Tab.Screen name="ExploreNav" component={ExploreNavigation} />
      <Tab.Screen name="WalletNav" component={WalletNavigation} />
      <Tab.Screen name="ProfileNav" component={ProfileNavigation} />
    </Tab.Navigator>
  );
};

export default MentorTabNavigation;
