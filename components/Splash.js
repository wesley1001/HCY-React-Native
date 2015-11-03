import React, {
    StyleSheet,
    Text,
    View,
    Image,
    Component,
    Dimensions,
    ProgressBarAndroid
} from 'react-native';
import MK, {
    MKColor,
    MKButton,
    MKSlider,
    MKRadioButton,
    MKCardStyles
} from 'react-native-material-kit';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const ColoredRaisedButton = MKButton.coloredButton()
    .withText('ENTER APP')
    .withBackgroundColor(MKColor.Pink)
    .build();

export default class Splash extends Component {
    render() {
        const { splash, onSkip } = this.props;

        return (
            <View style={styles.container}>
                {!this.props.splash && <View style={[styles.img, styles.progressContainer]}><ProgressBarAndroid styleAttr="Inverse"/></View>}
                {this.props.splash && <Image style={styles.img} source={{uri: this.props.splash.img}}/>}
                <View style={styles.body}>
                    <Image style={styles.logo} source={{uri:'http://img-storage.qiniudn.com/15-11-2/4009175.jpg'}}/>
                    <View style={styles.buttonGroup}>
                        <ColoredRaisedButton onPress={onSkip}/>
                    </View>
                </View>
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
    progressContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT*0.68
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: WINDOW_WIDTH
        //textAlign: 'center'
    },
    logo: {
        width: 136,
        height: 46,
        marginBottom: 16
    },
    buttonGroup: {
        flexDirection:'row'
    }
});
