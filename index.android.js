/**
 * HCY React Native APP
 * https://github.com/binggg/HCY-React-Native
 */
'use strict';
import React, {
    Component,
    AppRegistry,
    View,
    Text
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './configureStore.js';
import getRoute from './routers.js';

const store = configureStore();


class hcy extends Component {
    render() {
        let component = getRoute(store);
        return (
            <Provider store={store}>
                {component}
            </Provider>
        )
    }
}

AppRegistry.registerComponent('hcy', () => hcy);