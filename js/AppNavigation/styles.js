import { StyleSheet } from 'react-native';
import {
    COLOR_WHITE
} from '../styles/colors';

const styles = StyleSheet.create({
    userFullName: {
        fontFamily: 'Roboto',
        fontWeight: '300',
        fontSize: 22,
        color: COLOR_WHITE,
        marginTop: 10
    },
    userEmail: {
        fontFamily: 'Roboto',
        fontWeight: '100',
        fontSize: 16,
        color: COLOR_WHITE,
        marginTop: 3
    },
    tabIcon: {
        width: 24,
        height: 24,
    },
});

export { styles as default };
