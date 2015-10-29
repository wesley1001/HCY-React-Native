import React, { Component } from 'react-native';
import { connect } from 'react-redux';
import Splash from '../../components/Splash.js';
import { loadSplash, finishSplash } from '../../redux/modules/splash.js';

class SplashContainer extends Component {
    componentDidMount() {
        const { dispatch, navigator } = this.props;
        dispatch(loadSplash());
        setTimeout(function(){
            navigator.push({name: 'home'});
        },1000)
    }

    render() {
        const { splash, dispatch, navigator } = this.props;
        return (
            <Splash splash={splash} onSkip={()=>{this.handleCLick(dispatch, navigator)}}/>
        )
    }

    handleCLick(dispatch, navigator) {
        navigator.push({name: 'home'});
        dispatch(finishSplash())
    }
}

function mapStateToProps(state) {
    const { splash } = state;

    return {
        splash
    };
}

export default connect(mapStateToProps)(SplashContainer);