import React, {
    Navigator,
    View,
    Text,
    StyleSheet
} from 'react-native';
import SplashContainer from './containers/Splash/SplashContainer.js';

export default store => {
    let initialRoute = {name: 'splash'};

    const RouteMapper = function (route, navigator) {
        switch (route.name) {
            case 'splash':
                return (
                    <SplashContainer dispatch={store.dispatch} navigator={navigator}/>
                );
            case 'home':
                return (
                    <View style={styles.container}>
                        <Text>1</Text>
                    </View>
                );

        }
    };

    return (
        <Navigator
            initialRoute={initialRoute}
            configureScene={() => Navigator.SceneConfigs.FadeAndroid}
            renderScene={RouteMapper}
            />
    )
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});