import React from 'react';
import { Platform, Image } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import DrawerButton from './drawerButton';
import DrawerContent from './drawerContent';

import Home from '../containers/Home';
import Activity2 from '../containers/Activity2';
import PopupCard from '../containers/PopupCard';
import Splash from '../containers/Splash';
import Login from '../containers/Login';

import styles from './styles';


const HomeNavigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return ({
                title: 'Home',
                headerLeft: <DrawerButton navigation={navigation} />,
                drawerLabel: 'Home',
                drawerIcon: ({ tintColor }) => {
                    return (
                        <Image source={require('../images/tablet.png')}
                        style={[styles.tabIcon, { tintColor: 'black' }]}
                        />
                    );
                }
            });
        },
    },
    PopupCard: {
        screen: PopupCard,
    },
    Activity2: {
        screen: Activity2,
        navigationOptions: ({ navigation }) => {
            return ({
                title: 'Activity 2',
                drawerLabel: 'Activity 2 as a screen',
                drawerIcon: ({ tintColor }) => {
                    return (
                        <Image source={require('../images/tablet.png')}
                           style={[styles.tabIcon, { tintColor: 'black' }]}
                        />
                    );
                }
            });
        },
    },
}, {
    initialRouteName: 'Home',
    /* Use modal on iOS because the card mode comes from the right, which conflicts with the drawer example gesture
        https://github.com/react-community/react-navigation/blob/master/examples/NavigationPlayground/js/App.js */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

const Activity2Navigator = StackNavigator({
    Activity2: {
        screen: Activity2,
        navigationOptions: ({ navigation }) => {
            return ({
                title: 'Activity 2',
                headerLeft: <DrawerButton navigation={navigation} />,
                drawerLabel: 'Activity 2 as a stack',
                drawerIcon: ({ tintColor }) => {
                    return (
                        <Image source={require('../images/tablet.png')}
                        style={[styles.tabIcon, { tintColor: 'black' }]}
                        />
                    );
                }
            });
        },
    },
}, {
    initialRouteName: 'Activity2',
    /* Use modal on iOS because the card mode comes from the right, which conflicts with the drawer example gesture
        https://github.com/react-community/react-navigation/blob/master/examples/NavigationPlayground/js/App.js */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

const AppNavigator = DrawerNavigator({
    Home: {
        screen: HomeNavigator,
    },
    Activity2: {
        screen: Activity2,
    },
    Activity2Stack: {
        screen: Activity2Navigator,
    },
}, {
    contentComponent: DrawerContent,
});

const LandingNavigation = StackNavigator({
    Landing: { screen: Splash, navigationOptions: ({ navigation }) => { return ({ header: null }); } },
    Login: { screen: Login, navigationOptions: ({ navigation }) => { return ({ header: null }); } },
    AppNavigation: { screen: AppNavigator, navigationOptions: ({ navigation }) => { return ({ header: null }); } }
});


export default LandingNavigation;
