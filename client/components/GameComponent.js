import React from 'react';
import { connect } from 'react-redux';

class GameComponent extends React.Component {
    constructor(props){
        super(props);
        this.dealFunc = this.dealFunc.bind(this);
    }

    dealFunc(e){
        e.preventDefault();
        this.props.dealCard();
    }

    render(){
        return(
            <div>
                <h1>Welcome to game component</h1>
                <div>
                    <button type="submit" onClick={this.dealFunc}>Deal Cards</button>
                </div>
            </div>
        )
    }
}

GameComponent.PropTypes = {
    dealCard: React.PropTypes.func.isRequired
};

export default GameComponent