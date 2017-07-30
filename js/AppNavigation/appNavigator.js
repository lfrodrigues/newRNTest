import { DrawerNavigator, StackNavigator } from 'react-navigation';
import {  Button } from 'react-native';

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Platform
} from 'react-native';

import DrawerButton from './drawerButton';
import DrawerContent from './drawerContent';

import Home from '../containers/ApplicationTabs/Home';
import Activity2 from '../containers/ApplicationTabs/Activity2';
import PopupCard from '../containers/ApplicationTabs/PopupCard';


const HomeNavigator = StackNavigator({
    Home: {
        screen: Home,
    },
    PopupCard: {
        screen: PopupCard,
    },
}, {
    initialRouteName: 'Home',
    /* Use modal on iOS because the card mode comes from the right, which conflicts with the drawer example gesture
        https://github.com/react-community/react-navigation/blob/master/examples/NavigationPlayground/js/App.js */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',

    navigationOptions: ({ navigation }) => ({
        title: 'Home',
        headerLeft: <DrawerButton navigation={navigation} />,
    }),
});

const Activity2Navigator = StackNavigator({
    Activity2: {
        screen: Activity2,
    },
}, {
    navigationOptions: ({ navigation }) => ({
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
}, {
    contentComponent: DrawerContent
});


export default AppNavigator;
