import React from 'react';
import { connect } from 'react-redux';
import { startGame, dealCards, calculateHand } from '../actions/index';
import GameComponent from '../components/GameComponent';
import BoardContainer from '../containers/BoardContainer';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.deck);
        this.state = {
            player: {
                hand: this.props.hand
            },
            deck: this.props.deck,
            foldedCards: this.props.foldedCards
        };
        this.dealCard = this.dealCard.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log("component is about to receive props");
        console.log(nextProps);
        this.setState({
            hand: nextProps.hand,
            deck: nextProps.deck,
            foldedCards: nextProps.foldedCards
        });
    }

    dealCard(){
        console.log("deal card");
        this.props.dealCards(this.state.deck);
    }

    render(){
        return(
            <div>
                <GameComponent dealCard={this.dealCard} hitMe={this.hitMe} foldHand={this.foldHand}/>
                <BoardContainer foldedCards={this.state.foldedCards} hand={this.state.hand} deck={this.state.deck}/>
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

export default connect(mapStateToProps, { startGame, dealCards, calculateHand })(GameContainer)