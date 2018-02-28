import React, { Component } from 'react';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import SelectTimeScreen from '../screens/SelectTimeScreen';
import SelectAddressScreen from '../screens/SelectAddressScreen';
import ConfirmOtpScreen from '../screens/ConfirmOtpScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
// Price List Screens
import AccessoriesScreen from '../screens/PriceListScreens/AccessoriesScreen';
import CharakhScreen from '../screens/PriceListScreens/CharakhScreen';
import MenScreen from '../screens/PriceListScreens/MenScreen';
import WomenScreen from '../screens/PriceListScreens/WomenScreen';
import WoolenScreen from '../screens/PriceListScreens/WoolenScreen';
import HouseHoldScreen from '../screens/PriceListScreens/HouseHoldScreen';

export const PriceListNavigator = TabNavigator({
  men: { screen: MenScreen },
  women: { screen: WomenScreen },
  house_hold: { screen: HouseHoldScreen },
  woolen: { screen: WoolenScreen },
  charakh: { screen: CharakhScreen },
  accessories: { screen: AccessoriesScreen },
}, {
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: '#ffffff',
      style: {
        backgroundColor: '#04A2E1'
      }
    },
    navigationOptions: {
      headerTitle: 'Price List',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#04A2E1' }
    },
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    animationEnabled: false,
    swipeEnabled: true,
  }
);

export const HomeStack = StackNavigator({
  Home: {
    screen: MainScreen
  },
  PriceList: {
    screen: PriceListNavigator,
  },
  ScheduleTime: {
    screen: SelectTimeScreen,
  },
  ScheduleAddress: {
    screen: SelectAddressScreen
  },
  ConfirmOtp: {
    screen: ConfirmOtpScreen
  },
  Confirmation: {
    screen: ConfirmationScreen
  }
}, {
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#04A2E1' }
    }
  }
);

export const RootStackNavigator = TabNavigator({
  main: {
    screen: HomeStack,
  },
}, {
    navigationOptions: {
      headerTintColor: 'blue',
      tabBarVisible: false
    },
  });

export default class RootNavigator extends Component {
  render() {
    return (
      <RootStackNavigator />
    );
  }
}
