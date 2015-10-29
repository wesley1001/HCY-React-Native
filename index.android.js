/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

const React = require('react-native');
const {
        Component,
        AppRegistry,
        View,
        Text
    } = React;

import { Provider } from 'react-redux';
import configureStore from './configureStore';

import getRoute from './routers';

const store = configureStore();

class hcy extends Component {
    render() {
        let compoent = getRoute(store);
        return (
            <Provider store={store}>
                {compoent}
            </Provider>
        )
    }
}

AppRegistry.registerComponent('hcy', () => hcy);
