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
import { typography } from  'react-native-material-design-styles';

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

    componentDidMount(){
        MDI.getImageSource('baby', 20, 'red').then((source) => this.setState({ babyIcon: source }));
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
                    <Text>Analysis</Text>
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
                <Text style={typography.paperFontDisplay3}>11</Text>
                {conditions && <ViewPagerAndroid
                    style={styles.viewpager}
                    ref={VIEW_PAGER_REF}
                    initialPage={0}
                    onPageSelected={e=>{onCurrentConditionChange(e.nativeEvent.position)}}>
                    {conditions.map((condition, conditionIndex) => (
                        <ScrollView key={condition._id}>
                            <Text style={styles.title}>{condition.title}</Text>
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


var a = StyleSheet.create({"paperFontCommonBase":{"fontFamily":"'Roboto','Noto',sans-serif"},"paperFontCommonCode":{"fontFamily":"'RobotoMono','Consolas','Menlo',monospace"},"paperFontCommonExpensiveKerning":{},"paperFontCommonNowrap":{},"paperFontDisplay4":{"fontFamily":"'Roboto','Noto',sans-serif","fontSize":112,"fontWeight":300,"letterSpacing":-0.044,"lineHeight":120},"paperFontDisplay3":{"fontFamily":"'Roboto','Noto',sans-serif","fontSize":56,"fontWeight":400,"letterSpacing":-0.026,"lineHeight":60},"paperFontDisplay2":{"fontFamily":"'Roboto','Noto',sans-serif","fontSize":45,"fontWeight":400,"letterSpacing":-0.018,"lineHeight":48},"paperFontDisplay1":{"fontFamily":"'Roboto','Noto',sans-serif","fontSize":34,"fontWeight":400,"letterSpacing":-0.01,"lineHeight":40},"paperFontHeadline":{"fontFamily":"'Roboto','Noto',sans-serif","fontSize":24,"fontWeight":400,"letterSpacing":-0.012,"lineHeight":32},"paperFontTitle":{"fontFamily":"'Roboto','Noto',sans-serif","fontSize":20,"fontWeight":500,"lineHeight":28},"paperFontSubhead":{"fontFamily":"'Roboto','Noto',sans-serif","fontSize":16,"fontWeight":400,"lineHeight":24},"paperFontBody2":{"fontFamily":"'Roboto','Noto',sans-serif","fontSize":14,"fontWeight":500,"lineHeight":24},"paperFontBody1":{"fontFamily":"'Roboto','Noto',sans-serif","fontSize":14,"fontWeight":400,"lineHeight":20},"paperFontCaption":{"fontFamily":"'Roboto','Noto',sans-serif","fontSize":12,"fontWeight":400,"letterSpacing":0.011,"lineHeight":20},"paperFontMenu":{"fontFamily":"'Roboto','Noto',sans-serif","fontSize":13,"fontWeight":500,"lineHeight":24},"paperFontButton":{"fontFamily":"'Roboto','Noto',sans-serif","fontSize":14,"fontWeight":500,"letterSpacing":0.018,"lineHeight":24},"paperFontCode2":{"fontFamily":"'RobotoMono','Consolas','Menlo',monospace","fontSize":14,"fontWeight":700,"lineHeight":20},"paperFontCode1":{"fontFamily":"'RobotoMono','Consolas','Menlo',monospace","fontSize":14,"fontWeight":500,"lineHeight":20}});
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
