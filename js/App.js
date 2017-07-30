import React from 'react';

import { Provider } from 'react-redux';
// import codePush from 'react-native-code-push';

import configureStore from './store';
import AnalyticsProvider from './utils/AnalyticsUtils';
import { DARKER_PRIMARY } from './styles/colors';

import AppNavigation from './AppNavigation';


// const codePushOptions = {
//     checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//     installMode: codePush.InstallMode.IMMEDIATE
// };
const store = configureStore();


class App extends React.Component {
    render() {
        return (
            <AnalyticsProvider>
                <Provider store={store}>
                    <AppNavigation />
                </Provider>
            </AnalyticsProvider>
        );
    }

}

// export default codePush(codePushOptions)(App);
export default App;
