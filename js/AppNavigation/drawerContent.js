import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DrawerItems, NavigationActions } from 'react-navigation';

import Storage from 'react-native-simple-store';

import Communications from 'react-native-communications';

import styles from './styles';

class DrawerContent extends React.Component {

    static propTypes = {
        authFirstName: PropTypes.string.isRequired,
        authLastName: PropTypes.string.isRequired,
        authEmail: PropTypes.string.isRequired
    };

    sendFeedbackEmail = () => {
        Communications.email(['feedback@example.com'], null, null, 'AutoService - Feedback', null);
    };

    logout = () => {
        Storage.delete('user');
        const { navigation } = this.props;
        navigation.dispatch(NavigationActions.navigate({ routeName: 'Login' }));
    };

    render() {
        // eventually we can adapt code for other menu items when this
        // is merged https://github.com/react-community/react-navigation/pull/2183
        return (
            <View >
                <Text style={styles.userFullName}>
                    {this.props.authFirstName} {this.props.authLastName}
                </Text>
                <Text style={styles.userEmail}>
                    {this.props.authEmail}
                </Text>
                <DrawerItems {...this.props} />
                <TouchableHighlight onPress={() => { this.sendFeedbackEmail(); }}>
                    <Text>
                        Send Feedback
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { this.logout(); }}>
                    <Text>
                        Logout
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        authFirstName: state.auth.firstName,
        authLastName: state.auth.lastName,
        authEmail: state.auth.email
    };
}

export default connect(mapStateToProps)(DrawerContent);
