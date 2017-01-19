import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { startGame } from '../actions/index';

class HomeContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            deltCards: false
        };
        this.beginGame = this.beginGame.bind(this);
    }

    beginGame(){
        this.props.startGame();
    }

    render(){
        return(
            <Link onClick={this.beginGame()} to="/game">Play Blackjack</Link>
        )
    }
}

export default connect(null, { startGame })(HomeContainer);