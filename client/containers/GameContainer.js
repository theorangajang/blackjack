import React from 'react';
import { connect } from 'react-redux';
import { startGame, dealCards } from '../actions/index';
import GameComponent from '../components/GameComponent';
import BoardContainer from '../containers/BoardContainer';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.deck);
        this.dealCard = this.dealCard.bind(this);
    }

    dealCard(){
        console.log("deal card");
        this.props.dealCards(this.props.deck);
    }

    render(){
        return(
            <div>
                <GameComponent dealCard={this.dealCard} hitMe={this.hitMe} foldHand={this.foldHand}/>
                <BoardContainer foldedCards={this.props.foldedCards} hand={this.props.hand} deck={this.props.deck}/>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        hand: store.cardGameState.player.hand,
        deck: store.cardGameState.deck,
        foldedCards: store.cardGameState.foldedCards,
    }
};

export default connect(mapStateToProps, { startGame, dealCards })(GameContainer)