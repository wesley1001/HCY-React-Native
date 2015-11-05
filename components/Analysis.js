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
    MKProgress
} from 'react-native-material-kit';
import HCYRadioGroup from './HCYRadioGroup.js';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const VIEW_PAGER_REF = 'VIEW_PAGER_REF';

const SubmitButton = MKButton.coloredButton()
    .withText('SUBMIT')
    .withBackgroundColor(MKColor.Pink)
    .build();

export default class Analysis extends Component {

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
                            <Text style={styles.title}>{condition.title}</Text>
                            {condition.questions.map((question) => {
                                const radioGroup = new MKRadioButton.Group();
                                console.log(radioGroup);
                                return (
                                    <View style={styles.question} key={question._id}>
                                        <Text style={styles.questionName}>{question.name}</Text>
                                        <View style={styles.items}>
                                            {question.items.map((item) => (
                                                <View key={item._id} style={styles.item}>
                                                    <Image style={styles.icon} source={{uri: item.img}}/>
                                                    <MKRadioButton
                                                        onPress={(e) => {
                                                        console.log(e);
                                                        this.handleRadioPress(onAnswerChange,question._id, item._id, true)
                                                    }}
                                                        group={radioGroup}
                                                    />
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
