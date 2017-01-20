import React from 'react';
import PlayerContainer from '../containers/PlayerContainer';
import CalculationContainer from '../containers/CalculationContainer';

class BoardComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Board Component</h1>
                <div>
                    <CalculationContainer/>
                </div>
                <PlayerContainer playerHand={this.props.playerHand}/>
            </div>
        )
    }
}

BoardComponent.ReactPropTypes = {
    playerHand: React.PropTypes.array.isRequired,
    deck: React.PropTypes.array.isRequired
};

export default BoardComponent