import React from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from './appNavigator';

import Splash from '../containers/Splash';


class AppRoot extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            viewToRender: (<Splash />)
        };
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            const { dispatch, nav } = this.props;

            if (nav.routes[nav.index].routeName === 'AppNavigation') {
                const appNavIndex = nav.routes[nav.index].index;
                const appNavRoutes = nav.routes[nav.index].routes;
                if (appNavRoutes[appNavIndex].routeName === 'DrawerClose') {
                    const drawerNavIndex = appNavRoutes[appNavIndex].index;
                    const drawerNavRoutes = appNavRoutes[appNavIndex].routes;
                    if (drawerNavRoutes[drawerNavIndex].routeName === 'Home') {
                        const homeNavIndex = drawerNavRoutes[appNavIndex].index;
                        const homeNavRoutes = drawerNavRoutes[appNavIndex].routes;
                        if (homeNavRoutes[homeNavIndex].routeName === 'Home') {
                            return false;
                        }
                    }
                }
            } else if (nav.routes[nav.index].routeName === 'Login') {
                return false;
            }

            dispatch({ type: 'Navigation/BACK' });
            return true;
        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }

    render() {
        const { nav, dispatch } = this.props;
        return (<AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />);
    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav,
        navigation: state.navigation
    };
}

export default connect(mapStateToProps)(AppRoot);
