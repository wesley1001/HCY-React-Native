import React, { Component } from 'react-native';
import { connect } from 'react-redux';
import Analysis from '../../components/Analysis.js';
//import { loadSP, finishAnalysis } from '../../redux/modules/analysis.js';

class AnalysisContainer extends Component {
    componentDidMount() {
        const { dispatch, navigator } = this.props;
        //dispatch(loadAnalysis());
        //setTimeout(function(){
        //    navigator.push({name: 'home'});
        //},1000)
    }

    render() {
        const { splash, dispatch, navigator } = this.props;
        return (
            <Analysis splash={splash} onSkip={()=>{this.handleCLick(dispatch, navigator)}}/>
        )
    }

    handleCLick(dispatch, navigator) {
        navigator.push({name: 'home'});
        //dispatch(finishAnalysis())
    }
}

function mapStateToProps(state) {
    const { splash } = state;

    return {
        splash
    };
}

export default connect(mapStateToProps)(AnalysisContainer);