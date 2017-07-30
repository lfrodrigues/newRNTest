import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import { connect } from 'react-redux';
// import { Crashlytics } from 'react-native-fabric';
import { bindActionCreators } from 'redux';
import Config from 'react-native-config';
import SplashStyles from './styles';
import ICON from '../../images/icon.png';
import { userLoginSuccess } from '../../actions/auth';
import { VERSION_PATCH } from '../../utils/config';

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

    }

    render() {
        return (
            <View style={SplashStyles.container}>
                <Image source={ICON}/>
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
