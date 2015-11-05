import React, { Component } from 'react-native';
import { connect } from 'react-redux';
import Analysis from '../../components/Analysis.js';
import { loadConditions, finishCondition, setCurrentCondition, setQuestionAnswer } from '../../redux/modules/analysis.js';

class AnalysisContainer extends Component {
    componentDidMount() {
        const { dispatch, navigator } = this.props;
        dispatch(loadConditions());
    }

    render() {
        const {
            conditions,
            dispatch,
            navigator,
            finishedCondition,
            currentCondition,
            questionAnswers
            } = this.props;
        return (
            <Analysis
                conditions={conditions}
                finishedCondition={finishedCondition}
                currentCondition={currentCondition}
                questionAnswers={questionAnswers}
                onCurrentConditionChange={(position)=>{dispatch(setCurrentCondition(position))}}
                onAnswerChange={(question,answerId,anwser)=>{dispatch(setQuestionAnswer(question,answerId,anwser))}}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        conditions,
        finishedCondition,
        currentCondition,
    } = state;
}

export default connect(mapStateToProps)(AnalysisContainer);