import SplashContainer from './containers/Splash/SplashContainer';

export default store => {
    return (<SplashContainer dispatch={store.dispatch}/>)
}