import React, { Component } from 'react-native';
import { connect } from 'react-redux';
import Analysis from '../../components/Analysis.js';
import { loadConditions, finishCondition, setCurrentCondition } from '../../redux/modules/analysis.js';

class AnalysisContainer extends Component {
    componentDidMount() {
        const { dispatch, navigator } = this.props;
        dispatch(loadConditions());
    }

    render() {
        const { conditions, dispatch, navigator, finishedCondition, currentCondition } = this.props;
        return (
            <Analysis
                conditions={conditions}
                finishedCondition={finishedCondition}
                currentCondition={currentCondition}
                onSkip={()=>{this.handleCLick(dispatch, navigator)}}
                onCurrentConditionChange={(position)=>{dispatch(setCurrentCondition(position))}}
                />
        )
    }

    handleCLick(dispatch, navigator) {
        navigator.push({name: 'home'});
    }
}

function mapStateToProps(state) {
    const { conditions, finishedCondition, currentCondition } = state;
    return {
        conditions,
        finishedCondition,
        currentCondition
    };
}

export default connect(mapStateToProps)(AnalysisContainer);