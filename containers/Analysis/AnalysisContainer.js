import React, { Component } from 'react-native';
import { connect } from 'react-redux';
import Analysis from '../../components/Analysis.js';
import { loadConditions } from '../../redux/modules/analysis.js';

class AnalysisContainer extends Component {
    componentDidMount() {
        const { dispatch, navigator } = this.props;
        dispatch(loadConditions());
    }

    render() {
        const { conditions, dispatch, navigator } = this.props;
        return (
            <Analysis conditions={conditions} onSkip={()=>{this.handleCLick(dispatch, navigator)}}/>
        )
    }

    handleCLick(dispatch, navigator) {
        navigator.push({name: 'home'});
    }
}

function mapStateToProps(state) {
    const { conditions } = state;

    return {
        conditions
    };
}

export default connect(mapStateToProps)(AnalysisContainer);