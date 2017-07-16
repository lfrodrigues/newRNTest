import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { connect } from "react-redux";
import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from './appNavigator';


class AppRoot extends React.Component {


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

    //LUIS CLEAN

    // The render function should be pure, meaning that it does not modify component state,
    // it returns the same result each time it's invoked, and it does not directly interact with the browser.
    // If you need to interact with the browser, perform your work in componentDidMount()
    // or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.
    // You can also return null or false to indicate that you don't want anything rendered.
    // When returning null or false, ReactDOM.findDOMNode(this) will return null.
    render() {
        const {nav, dispatch} = this.props;
        // Are we authenticated?
        if (true) {
            // Render the root navigator.
            return (
                <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
            );
        } else {
            // Render the login screen.
            return (
                <Login/>
            );
        }
    }
}


// AppNavigation.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired,
// };

const mapStateToProps = state => ({
  nav: state.nav,
});

export default  connect(mapStateToProps)(AppRoot);
