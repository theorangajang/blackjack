import React from 'react';
import { connect } from 'react-redux';
import { chosenAceVal } from '../actions/index';
import AceComponent from '../components/AceComponent';

class AceContainer extends React.Component {
    constructor(props){
        super(props);
        this.chosenAce = this.chosenAce.bind(this);
    }

    chosenAce(aceValueChosen){
        console.log(this.props.playerHand);
        let handWithAce = {
            hand: this.props.playerHand,
            value: aceValueChosen
        };
        this.props.chosenAceVal(handWithAce);
        this.props.aceCardState = false;
        this.props.foundAce = false;
    }

    render() {
        return (
            <AceComponent aceCard={this.props.aceCard} foundAce={this.props.foundAce} aceHasBeenChosen={this.props.aceCardState} chosenAce={this.chosenAce}/>
        )
    }
}

AceContainer.PropTypes = {
  aceCard: React.PropTypes.string.isRequired,
  foundAce: React.PropTypes.bool.isRequired,
  playerHand: React.PropTypes.array.isRequired
};

const mapStateToProps = (store) => {
    return {
        aceCardState: store.aceCardState.aceHasBeenGivenVal
    }
};

export default connect(mapStateToProps, { chosenAceVal })(AceContainer)