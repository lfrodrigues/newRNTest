import Storage from 'react-native-simple-store';
import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { connect } from "react-redux";
import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from './appNavigator';

import Login from '../containers/Login';
import Splash from '../containers/Splash';


class AppRoot extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            viewToRender: (<Splash/>)
        };
    }

    componentDidMount() {
        // Subscribe to the hardware back button press event on TODO Android.
        BackHandler.addEventListener('hardwareBackPress', () => {
            let {dispatch, nav} = this.props;
            // Close the drawer if necessary.
            if (nav.routes[nav.index].key === 'DrawerOpen') {
                dispatch({type: 'Navigate', routeName: 'DrawerClose'});
                return true;
            }
            return false;
        });
    }

    render() {
        const {nav, dispatch} = this.props;
        let returnContainer = null;
        // Are we authenticated?
        Storage.get('user').then((user) => {
            if (user) {

                // this.props.userLoginSuccess(user.token, user.user);

                // const props = {
                //     firstName: user.first_name,
                //     lastName: user.last_name,
                //     email: user.email,
                // };
                // this.context.analytics.setUserId(user.id, props);

                // Render the root navigator.
                this.setState({
                    viewToRender: (<AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />)
                })
            } else {
                // Render the login screen.
                this.setState({
                    viewToRender: (<Login/>)
                })
            }
        });

        return (this.state.viewToRender);

    }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default  connect(mapStateToProps)(AppRoot);
