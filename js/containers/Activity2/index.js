import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Activity2 extends Component {

    static navigationOptions = {
        drawerLabel: 'Activity2',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/tablet.png')}
                style={[styles.tabIcon, {tintColor: 'black'}]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>
                    Activity2
                </Text>
            </View>

        );
    }
}
