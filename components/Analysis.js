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
import HCYRadioGroup from './HCYRadioGroup.js';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const ColoredRaisedButton = MKButton.coloredButton()
    .withText('BUTTON')
    .withOnPress(() => {
        console.log("Hi, it's a colored button!");
    })
    .build();


export default class Analysis extends Component {
    render() {
        const { conditions, onSkip } = this.props;
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
                {conditions && <ViewPagerAndroid
                    style={styles.viewpager}
                    initialPage={0}>
                    {conditions.map((condition) => (
                        <ScrollView key={condition._id}>
                            <Text style={styles.title}>{condition.title}</Text>
                            {condition.questions.map((question) => (
                                <View style={styles.question} key={question._id}>
                                    <Text style={styles.questionName}>{question.name}</Text>
                                    <View style={styles.items}>
                                        <HCYRadioGroup>
                                        {question.items.map((item) => (
                                            <View key={item._id} style={styles.item}>
                                                <Image style={styles.icon} source={{uri: item.img}}/>
                                                <MKRadioButton group={this.radioGroup} />
                                                <Text>{item.text}</Text>
                                            </View>
                                        ))}
                                        </HCYRadioGroup>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    ))}
                </ViewPagerAndroid>}
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
    title: {
        textAlign: 'center',
        fontSize: 18,
    },
    buttonText: {
        fontWeight: 'bold',
        color: MKColor.Pink
    },
    question: {
        flex: 1
    },
    questionName: {
        marginTop: 24,
        marginBottom: 16,
        textAlign: 'center'
    },
    items: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        width: WINDOW_WIDTH / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    icon: {
        width: 100,
        height: 68
    }
});
