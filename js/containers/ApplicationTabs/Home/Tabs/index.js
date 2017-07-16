import React, { Component } from 'react';
import { View } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import Tab3 from './Tab3';
import Tab2 from './Tab2';
import Tab1 from './Tab1';
import styles from './styles';


class Tabs extends Component {

    static title = 'Scrollable top bar';
    static appbarElevation = 0;

    static propTypes = {
        style: View.propTypes.style,
    };
    constructor(props) {
        super(props);
        this.state = {
                        index: 0,
                        routes: [
                            { key: '1', title: 'First' },
                            { key: '2', title: 'Second' },
                        ],
                    };
    }

    _handleChangeTab = (index) => {
        this.setState({
            index,
        });
    };


    renderIcon = ({ route }) => {
        return (
            <View style={styles.iconContainer}>
                <Icon style={styles.icon} name={route.icon}/>
            </View>
        );
    };

    _renderHeader = (props) => {
        return (
            <TabBar {...props}
                indicatorStyle={styles.indicator}
                style={styles.tabbar}
                labelStyle={styles.label}
                renderIcon={this.renderIcon}
            />
        );
    };

    _renderScene = SceneMap({
        '1': Tab1,
        '2': Tab2,
    });

    render() {
        return (
            <TabViewAnimated style={[styles.container, this.props.style]}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onRequestChangeTab={this._handleChangeTab}
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
