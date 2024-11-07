 import React, { useState } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation/index';
import AuthNavigation from './AuthNavigation';
import { SessionContext } from '@/src/context/SessionContext';
import MentorTabNavigation from './MentorTabNavigation/index';

const Stack = createStackNavigator();

const RootNavigation = () => {
   const [session, setSession] = useState(false);
   const [userRole, setUserRole] = useState<null | 'mentor' | 'mentee'>(null);

  return (
    <SessionContext.Provider value={{  session, setSession, userRole, setUserRole }}>

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            animationEnabled: true,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}
        >
         {session ? (
            userRole === 'mentor' ? (
              <Stack.Screen name="MentorTabNavigation" component={MentorTabNavigation} />
            ) : (
              <Stack.Screen name="TabNavigation" component={TabNavigation} />
            )
          ) : (
            <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SessionContext.Provider>
  );
};

export default RootNavigation;

