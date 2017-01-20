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

    render() {
        return (
            <div>
                {(this.props.amount <= 21) ?
                    (<h2>{this.props.amount}</h2>) :
                    (<div>
                        <button onClick={this.resetGame}>Reset Game</button>
                        <h2>You Lost!</h2>
                    </div>)
                }
            </div>
        )
    }
}

CalculationComponent.PropTypes = {
    amount: React.PropTypes.number.isRequired,
    resetEntireGame: React.PropTypes.func.isRequired
};

export default CalculationComponent