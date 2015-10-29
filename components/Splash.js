import React from 'react-native';
const {
  StyleSheet,
  Text,
  View,
  Image,
  Component,
  Dimensions,
  } = React;


const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.splash && <Image style={styles.img} source={{uri: this.props.splash.img}}/>}
      </View>
    )
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#F5FCFF',
  },
  img: {
    flex: 1,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
