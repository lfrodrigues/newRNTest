import React from 'react';
import { connect } from 'react-redux';
import { DrawerItems, TouchableItem } from 'react-navigation';
import {
    View,
    Text
} from 'react-native';

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
                <TouchableItem
                    key={route.key}
                    onPress={() => {
                        onItemPress({ route, focused });
                    }}
                    delayPressIn={0}
                    >
                    <View style={[styles.item, { backgroundColor }]}>
                        {icon
                        ? <View
                            style={[styles.icon, focused ? null : styles.inactiveIcon]}
                            >
                            {icon}
                            </View>
                        : null}
                        {typeof label === 'string'
                        ? <Text style={[styles.label, { color }, labelStyle]}>
                            {label}
                            </Text>
                        : label}
                    </View>
                    </TouchableItem>
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
