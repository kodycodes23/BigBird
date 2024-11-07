import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import WalletScreen from '../../tabs/mentor/wallet/Wallet'
import BankWithdraw from '../../tabs/mentor/wallet/BankWithdrawal'
import CardDeposit from '../../tabs/mentor/wallet/CardDeposit'
import Deposit from '../../tabs/mentor/wallet/Deposit'
import Withdraw from '../../tabs/mentor/wallet/Withdraw'


const Stack = createStackNavigator();
const WalletNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
      animationEnabled: true,
      gestureEnabled: true,
      gestureDirection: "horizontal"
    }}>
      <Stack.Screen name="Wallet" component={WalletScreen}/>
      <Stack.Screen name="BankWithdraw" component={BankWithdraw}/>
      <Stack.Screen name="CardDeposit" component={CardDeposit}/>
      <Stack.Screen name="Deposit" component={Deposit}/>
      <Stack.Screen name="Withdraw" component={Withdraw}/>

    </Stack.Navigator>
  )
}

export default WalletNavigation