import React from 'react';
import map from 'lodash/map';
import AceContainer from '../containers/AceContainer';

class PlayerComponent extends React.Component {
    constructor(props){
        super(props);
        this.hitFunc = this.hitFunc.bind(this);
        this.foldFunc = this.foldFunc.bind(this);
    }

    hitFunc(e){
        e.preventDefault();
        this.props.hitMe();
    }

    foldFunc(e){
        e.preventDefault();
        this.props.foldHand();
    }

    render() {
        const playerHands = map(this.props.playerHand, (index) => {
            if (index.number === 'A') {
                const aceCard = {
                    number: index.number,
                    suit: index.suit
                };
                return <AceContainer aceCard={aceCard}/>
            }else {
                return <h1>{index.number}, {index.suit}</h1>
            }
        });

        return (
            <div>
                {this.props.playerHand.length <= 0 ? <h1>No Cards in Hand </h1> : <div>{playerHands}</div>}
                <div>
                    <button type="submit" onClick={this.hitFunc}>Hit Me!</button>
                </div>
                <div>
                    <button type="submit" onClick={this.foldFunc}>Fold</button>
                </div>
            </div>
        )
    }
}

PlayerComponent.PropTypes = {
    hitMe: React.PropTypes.func.isRequired,
    foldHand: React.PropTypes.func.isRequired,
    playerHand: React.PropTypes.array.isRequired
};

export default PlayerComponent