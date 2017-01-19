import React from 'react';
import map from 'lodash/map';
import AceContainer from '../containers/AceContainer';

class CalculationComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.amount}</h2>
            </div>
        )
    }
}

CalculationComponent.PropTypes = {
    amount: React.PropTypes.number.isRequired
};

export default CalculationComponent