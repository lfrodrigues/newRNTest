import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
// import { actions as navigationActions } from 'react-native-navigation-redux-helpers';

import { COLOR_WHITE } from '../../../styles/colors';
import styles from './styles';

// const { popRoute } = navigationActions;

class OrderDone extends Component {

    static propTypes = {
        dispatch: React.PropTypes.func
    }
    render() {
        return (
            <View style={styles.container}>
                <Icon.ToolbarAndroid style={styles.toolbar}
                                     titleColor={COLOR_WHITE}
                                     navIconName="arrow-back"
                                     onIconClicked={
                                         {/*() => { this.props.dispatch(popRoute('global')); }*/}
                                         }
                                     title={'Order Done'}
                />
                <View style={styles.contentWrapper}>
                    <Icon name={'check-circle'} style={styles.icon}/>
                    <Text style={styles.h1}>
                        Order Done
                    </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDone);
