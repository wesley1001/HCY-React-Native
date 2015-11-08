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
    ScrollView,
    ProgressBarAndroid
} from 'react-native';
import MK, {
    MKColor,
    MKButton,
    MKSlider,
    MKRadioButton,
    MKCardStyles,
    MKProgress,
    MKIconToggle
} from 'react-native-material-kit';
import MDI from './MDI';
import { typography } from 'react-native-material-design-styles';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const VIEW_PAGER_REF = 'VIEW_PAGER_REF';

const SubmitButton = MKButton.coloredButton()
    .withText('SUBMIT')
    .withBackgroundColor(MKColor.Pink)
    .build();
const FakeRadioButton = MKButton.coloredButton()
    .withText('PICK')
    .withBackgroundColor(MKColor.grey)
    .build();

export default class Analysis extends Component {

    componentDidMount() {
        MDI.getImageSource('baby', 20, 'red').then((source) => this.setState({babyIcon: source}));
    }

    render() {
        const {
            conditions,
            questionAnswers,
            currentCondition,
            onCurrentConditionChange,
            onAnswerChange
            } = this.props;

        const actions = [
            {
                title: '返回',
                show: 'always',
                icon: this.state && this.state.babyIcon
            }
        ];
        console.log(this.state);
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    style={styles.toolbar}
                    actions={actions}>
                    <MDI name="auto-fix" size={24} color="#000" style={{opacity:.54}}/>
                    <Text style={typographyStyle.paperFontSubhead}>Analysis</Text>
                </ToolbarAndroid>
                {!conditions && <View style={styles.content}>
                    <ProgressBarAndroid styleAttr="Inverse"/>
                </View>}
                {conditions && currentCondition &&
                <MKProgress
                    style={styles.progress}
                    progress={(currentCondition.position + 1) / conditions.length}
                    />
                }
                {conditions && <ViewPagerAndroid
                    style={styles.viewpager}
                    ref={VIEW_PAGER_REF}
                    initialPage={0}
                    onPageSelected={e=>{onCurrentConditionChange(e.nativeEvent.position)}}>
                    {conditions.map((condition, conditionIndex) => (
                        <ScrollView key={condition._id}>
                            <Text style={typographyStyle.paperFontTitle}>{condition.title}</Text>
                            {condition.questions.map((question) => {
                                return (
                                    <View style={styles.question} key={question._id}>
                                        <Text style={styles.questionName}>{question.name}</Text>
                                        <View style={styles.items}>
                                            {question.items.map((item) => (
                                                <View key={item._id} style={styles.item}>
                                                    <Image style={styles.icon} source={{uri: item.img}}/>
                                                    <MKIconToggle
                                                        checked={true}
                                                        onCheckedChange={this._onIconChecked}
                                                        onPress={(e) => {
                                                        this.handleRadioPress(onAnswerChange,question._id, item._id, true)
                                                    }}
                                                        >
                                                        <Text pointerEvents="none"
                                                              style={styles.toggleTextOff}>Off</Text>
                                                        <Text state_checked={true}
                                                              pointerEvents="none"
                                                              style={[styles.toggleText, styles.toggleTextOn]}>On</Text>
                                                    </MKIconToggle>

                                                    <Text>{item.text}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </View>
                                )
                            })}

                            <View style={styles.actionArea}>
                                <SubmitButton
                                    onPress={e=> {
                                        onCurrentConditionChange(conditionIndex+1);
                                        if (conditionIndex < conditions.length-1) {
                                            this.refs[VIEW_PAGER_REF].setPage(conditionIndex+1);
                                        } else {
                                            console.log(conditionIndex, conditions.length);
                                        }
                                    }}
                                    />
                            </View>
                        </ScrollView>
                    ))}
                </ViewPagerAndroid>}
            </View>
        )
    }

    handleRadioPress(onAnswerChange, question, answerId, answer) {
        onAnswerChange(question, answerId, answer)
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        marginTop: 16,
    },
    buttonText: {
        fontWeight: 'bold',
        color: MKColor.Pink
    },
    question: {
        flex: 1
    },
    questionName: {
        marginTop: 0,
        marginBottom: 8,
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
        marginBottom: 16
    },
    icon: {
        width: 100,
        height: 68
    },
    actionArea: {
        padding: 16
    }
});

const typographyStyle = StyleSheet.create(typography);