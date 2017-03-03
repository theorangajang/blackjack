import React from 'react';
import { connect } from 'react-redux'
import { resetEntireGame } from '../actions/index';
import CalculationComponent from '../components/CalculationComponent';

class CalculationContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            amount: 0
        };
        this.resetEntireGame = this.resetEntireGame.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        console.log("CalculationComponent is about to receive props");
        console.log(nextProps);
        this.setState({
            amount: nextProps.amountState
        });
    }

    resetEntireGame(){
        this.props.resetEntireGame()
    }

    render() {
        return (
            <CalculationComponent resetEntireGame={this.resetEntireGame} amount={this.state.amount}/>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        amountState: store.amountState.amount
    }
};

export default connect(mapStateToProps, { resetEntireGame })(CalculationContainer)