import React, {
    StyleSheet,
    Text,
    View,
    Image,
    ToolbarAndroid,
    Component,
    Dimensions,
    TouchableHighlight,
    PixelRatio,
    ViewPagerAndroid,
    ScrollView
} from 'react-native';
import MK, {
    MKColor,
    MKButton,
    MKSlider,
    MKRadioButton,
    MKCardStyles
} from 'react-native-material-kit';
console.log(MKColor, MKCardStyles);

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default class Analysis extends Component {
    render() {
        const { splash, onSkip } = this.props;
        const actions = [
            {
                title: '返回',
                show: 'always',
                icon: {uri: 'http://placehold.it/' + PixelRatio.get() * 48}
            }
        ];
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    style={styles.toolbar}
                    navIcon={{uri:'http://placehold.it/'+ PixelRatio.get() * 48}}
                    logo={{uri:'http://placehold.it/'+ PixelRatio.get() * 48}}
                    title={'HCY'}
                    actions={actions}/>
                <ViewPagerAndroid
                    style={styles.viewpager}
                    initialPage={0}>
                    <View style={styles.innerContent}>
                        <Text>Lorem ipsum dolor sit amet.</Text>
                        <MKButton
                            backgroundColor={MKColor.transparent}
                            onPress={() => {
                            console.log('press')
                        }}>
                        </MKButton>
                        <MKSlider></MKSlider>

                    </View>
                    <View>
                        <Text>2</Text>
                        <MKRadioButton checked={true}/>
                    </View>
                </ViewPagerAndroid>
            </View>
        )
    }
}


var styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        flex: 1
    },
    toolbar: {
        height: 56,
    },
    content: {
        flex: 1
    },
    viewpager: {
        flex: 1
    },
    innerContent: {
        padding: 16
    },
    buttonText: {
        fontWeight: 'bold',
        color: MKColor.Pink
    }
});
