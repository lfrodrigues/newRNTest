import React, { Component } from 'react';
import Storage from 'react-native-simple-store';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
// import { Crashlytics } from 'react-native-fabric';
import { NavigationActions } from 'react-navigation';
import SplashStyles from './styles';
import ICON from '../../images/icon.png';


class SplashPage extends Component {

    static propTypes = {
        dispatch: React.PropTypes.func,
        userLoginSuccess: React.PropTypes.func,
    };

    static contextTypes = {
        analytics: React.PropTypes.object
    };

    componentDidMount() {
        // Crashlytics.setString('currentScreen', 'Splash');
        // Crashlytics.setString('currentVersion', `v${Config.APP_VERSION_NAME}.${VERSION_PATCH}`);
        const { navigation } = this.props;
        // TODO: put a delay to see the splash
        // Are we authenticated? Reset nav state to clear splash
        Storage.get('user').then((user) => {
            if (user) {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'AppNavigation' })
                    ]
                });
                navigation.dispatch(resetAction);
            } else {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Login' })
                    ]
                });
                navigation.dispatch(resetAction);
            }
        });
    }

    render() {
        console.log(this.props);
        return (
            <View style={SplashStyles.container}>
                <Image source={ICON} />
                <Text style={SplashStyles.title}>My Store Foo</Text>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
