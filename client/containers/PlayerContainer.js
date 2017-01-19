import React from 'react';
import { connect } from 'react-redux';
import { hitMe, foldHand } from '../actions/index';
import PlayerComponent from '../components/PlayerComponent';

class PlayerContainer extends React.Component {
    constructor(props){
        super(props);
        this.hitMe = this.hitMe.bind(this);
        this.foldHand = this.foldHand.bind(this);
    }

    hitMe(){
        console.log("hit me!");
        let gameState = {
            hand: this.props.playerHand,
            deck: this.props.deck
        };
        this.props.hitMe(gameState);
    }

    foldHand(){
        console.log("fold cards");
        let gameState = {
            hand: this.props.playerHand,
            deck: this.props.deck
        };
        this.props.foldHand(gameState);
    }

    render() {
        return (
            <PlayerComponent hitMe={this.hitMe} foldHand={this.foldHand} playerHand={this.props.playerHand}/>
        )
    }
}

PlayerContainer.PropTypes = {
    playerHand: React.PropTypes.array.isRequired
};

const mapStateToProps = (store) => {
    return {
        playerHand: store.cardGameState.player.hand,
        deck: store.cardGameState.deck
    }
};

export default connect(mapStateToProps, { hitMe, foldHand })(PlayerContainer)