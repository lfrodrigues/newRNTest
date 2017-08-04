import React from 'react';
import { Platform, Image } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import DrawerButton from './drawerButton';
import DrawerContent from './drawerContent';

import Home from '../containers/Home';
import Activity2 from '../containers/Activity2';
import PopupCard from '../containers/PopupCard';

import styles from './styles';


const HomeNavigator = StackNavigator({
    Home: {
        screen: Home,


        navigationOptions: ({ navigation }) => ({
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
        }),
    },
    PopupCard: {
        screen: PopupCard,
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
        navigationOptions: ({ navigation }) => ({
            title: 'Activity 2',
            headerLeft: <DrawerButton navigation={navigation} />,
            drawerLabel: 'Activity 2',
            drawerIcon: ({ tintColor }) => {
                return (
                    <Image source={require('../images/tablet.png')}
                        style={[styles.tabIcon, { tintColor: 'black' }]}
                    />
                );
            }
        }),
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
        screen: Activity2Navigator,
    },
}, {
    contentComponent: DrawerContent
});


export default AppNavigator;
