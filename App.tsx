import { View, Text} from 'react-native'
import React, {useEffect, useState} from 'react'
import styled from "styled-components/native"
import {StatusBar} from "expo-status-bar"
import RootNavigation from './src/screens/navigation/RootNavigation';
import useCachedResources from './hooks/UseCachedResources';
import { useUserStore } from './store/useUserStore';
import { Provider } from 'react-redux';
import { store } from '@/lib/store/store';

const App = () => {

  const isloadingComplete =useCachedResources();
  const {session, user } = useUserStore();

  useEffect(() => console.log(user, session), [user , session]);

  if (!isloadingComplete){
    return null;
  }
  return (
    <Provider store={store}>
    <Container>
      <StatusBar style='auto'/>
    <RootNavigation/>
    </Container>
    </Provider>
  );
};

export default App;

const Container = styled(View) `
flex: 1;
`;

