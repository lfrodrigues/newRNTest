import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';

import {
    SECONDARY_COLOR,
    PRIMARY_COLOR,
    COLOR_WHITE
} from '../styles/colors';

const styles = StyleSheet.create({
    icon: {
        fontSize: 30,
        color: PRIMARY_COLOR
    },
})

// style={styles.buttonStyle}
const DrawerButton = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
        <Icon name="menu" style={styles.icon} />
    </TouchableOpacity>
);

DrawerButton.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};

export default DrawerButton;