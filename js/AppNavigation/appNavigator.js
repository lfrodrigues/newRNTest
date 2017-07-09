import { DrawerNavigator, StackNavigator } from 'react-navigation';
import {  Button } from 'react-native';

import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import DrawerButton from './drawerButton'

import Home from "../containers/ApplicationTabs/Home"
import Activity2 from '../containers/ApplicationTabs/Activity2';


const HomeNavigator = StackNavigator({
  Home: {
    screen: Home,
  },
}, {
  navigationOptions: ({navigation}) => ({
      title: 'Home',
       headerLeft: <DrawerButton navigation={navigation} />,
    }),

});

const Activity2Navigator = StackNavigator({
  Activity2: {
      screen: Activity2,
    },
  }, {
    navigationOptions: ({navigation}) => ({
      title: 'Activity 2',
      headerLeft: <DrawerButton navigation={navigation} />,
    }),
});

const AppNavigator = DrawerNavigator({
  Home: {
    screen: HomeNavigator,
  },
  Activity2: {
    screen: Activity2Navigator,
  },
}
);


export default AppNavigator;
