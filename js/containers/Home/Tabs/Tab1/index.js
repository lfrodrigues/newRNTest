import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

// const { pushRoute } = navigationActions;

class Tab1 extends Component {

    static propTypes = {
        dispatch: React.PropTypes.func
    };

    static contextTypes = {
        analytics: React.PropTypes.object
    };

    componentDidMount() {
        this.context.analytics.trackScreenView('Tab1');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={() => { this.props.dispatch(NavigationActions.navigate({ routeName: 'PopupCard' })); }}
                        style={styles.button}
                    >
                        <Text style={styles.h1}>
                            CTA
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
};

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab1);
