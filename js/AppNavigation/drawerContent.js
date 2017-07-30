import React from 'react';
import { connect } from 'react-redux';
import { DrawerItems } from 'react-navigation';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

// eventually we can adapt code for logout when this is merged https://github.com/react-community/react-navigation/pull/2183

class DrawerContent extends React.Component {

    render() {
        return (
            <View >
                <Text>
                    Here put some content...
                </Text>
                <Text>
                    ... that can be changed!
                </Text>
                <DrawerItems {...this.props} />
                <TouchableHighlight onPress={() => {alert('asdasd')}}>
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
        nav: state.nav,
    };
}

export default connect(mapStateToProps)(DrawerContent);
