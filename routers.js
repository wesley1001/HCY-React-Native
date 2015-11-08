import React, {
    Navigator,
    View,
    Text,
    StyleSheet
} from 'react-native';
import SplashContainer from './containers/Splash/SplashContainer.js';
import AnalysisContainer from './containers/Analysis/AnalysisContainer.js';
import MaterialDesign from './components/MaterialDesign.js';

export default store => {
    let initialRoute = {name: 'splash'};
    return (
        <Navigator
            initialRoute={initialRoute}
            configureScene={() => Navigator.SceneConfigs.FadeAndroid}
            renderScene={RouteMapper}
            />
    );

    function RouteMapper(route, navigator) {
        switch (route.name) {
            case 'splash':
                return (
                    <SplashContainer dispatch={store.dispatch} navigator={navigator}/>
                );
            case 'home':
                return (
                    <View>
                        <Text>home</Text>
                    </View>
                );
            case 'analysis':
                return (
                    <AnalysisContainer dispatch={store.dispatch} navigator={navigator}/>
                );
            case 'test':
                return (
                    <MaterialDesign />
                );
        }
    }
}