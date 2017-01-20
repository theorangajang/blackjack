import React from 'react';
import { connect } from 'react-redux';
import BoardComponent from '../components/BoardComponent';

class BoardContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="board_div">
                <BoardComponent playerHand={this.props.hand} deck={this.props.deck} foldedCards={this.props.foldedCards}/>
            </div>
        )
    }
}

BoardContainer.PropTypes = {
    hand: React.PropTypes.array.isRequired,
    deck: React.PropTypes.array.isRequired,
    foldedCards: React.PropTypes.array.isRequired
};

export default BoardContainer