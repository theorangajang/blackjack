import React from 'react';
import { connect } from 'react-redux'
// import { getHandSum } from '../actions/index';
import CalculationComponent from '../components/CalculationComponent';

class CalculationContainer extends React.Component {
    constructor(props){
        super(props);
        // this.props.getHandSum();
    }

    render() {
        return (
            <CalculationComponent amount={this.props.amountState}/>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        amountState: store.amountState.amount
    }
};

export default connect(mapStateToProps)(CalculationContainer)