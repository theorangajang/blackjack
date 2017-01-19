import React from 'react';
import { connect } from 'react-redux';
import BoardComponent from '../components/BoardComponent';

class BoardContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            player: {
                hand: []
            },
            deck: this.props.deck,
            foldedCards: []
        };
        console.log(this.props.hand);
        console.log(this.props.deck);
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

    render() {
        return (
            <div className="board_div">
                <BoardComponent playerHand={this.props.hand} deck={this.props.deck}/>
            </div>
        )
    }
}

BoardContainer.ReactPropTypes = {
    hand: React.PropTypes.array.isRequired,
    deck: React.PropTypes.array.isRequired
};

export default BoardContainer