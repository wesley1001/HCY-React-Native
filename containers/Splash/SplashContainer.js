import React, { Component } from 'react-native';
import { connect } from 'react-redux';
import Splash from '../../components/Splash';
import { loadSplash, finishSplash } from '../../redux/modules/splash.js';

class SplashContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadSplash());
    dispatch(finishSplash());
  }

  render() {
    const { splash } = this.props;
    return (
      <Splash splash={splash}/>
    )
  }
}

function mapStateToProps(state) {
  const { splash } = state;

  return {
    splash
  };
}

export default connect(mapStateToProps)(SplashContainer);