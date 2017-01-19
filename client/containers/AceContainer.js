import React from 'react';
import { connect } from 'react-redux';
import { chosenAceVal } from '../actions/index';
import AceComponent from '../components/AceComponent';

class AceContainer extends React.Component {
    constructor(props){
        super(props);
        this.chosenAceVal = this.chosenAceVal.bind(this);
    }

    chosenAceVal(aceValueChosen){
        this.props.chosenAceVal(aceValueChosen);
    }

    render() {
        return (
            <AceComponent aceCard={this.props.aceCard} aceHasBeenChosen={this.props.aceCardState} chosenAceVal={this.props.chosenAceVal}/>
        )
    }
}

AceContainer.PropTypes = {
  aceCard: React.PropTypes.object.isRequired
};

const mapStateToProps = (store) => {
    return {
        aceCardState: store.aceCardState.aceHasBeenGivenVal
    }
};

export default connect(mapStateToProps, { chosenAceVal })(AceContainer)