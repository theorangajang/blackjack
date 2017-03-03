import React from 'react';
import map from 'lodash/map';
import AceContainer from '../containers/AceContainer';

class CalculationComponent extends React.Component {
    constructor(props){
        super(props);
        this.resetGame = this.resetGame.bind(this);
    }

    resetGame(){
        this.props.resetEntireGame();
    }

    checkScore(){
        if(this.props.amount <= 21) {
            return(<h2>{this.props.amount}</h2>);
        }else{
            return(<div><button onClick={this.resetGame}>Reset Game</button><h2>You Lost!</h2></div>);
        }
    }

    render() {
        return (
            <div>
                {this.checkScore()}
            </div>
        )
    }
}

CalculationComponent.PropTypes = {
    amount: React.PropTypes.number.isRequired,
    resetEntireGame: React.PropTypes.func.isRequired
};

export default CalculationComponent