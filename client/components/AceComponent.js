import React from 'react';

class AceComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            aceValChosen: this.props.aceHasBeenChosen
        };
        this.aceValue = this.aceValue.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log("AceComponent is about to receive props");
        console.log(nextProps);
        this.setState({
            aceValChosen: nextProps.aceHasBeenChosen
        });
    }

    aceValue(e){
        e.preventDefault();
        let aceVal = {
            value: parseInt(e.target.value)
        };
        this.props.chosenAceVal(aceVal);
    }

    render() {
        return (
            <div>
                { (this.state.aceValChosen) ?
                    (<div>
                        <h1>{this.props.aceCard.number}, {this.props.aceCard.suit}</h1>
                    </div>):
                    (<div>
                        <h4>How much would you like your ace to be worth?</h4>
                        <button type="submit" className="ace" value="1" onClick={this.aceValue}>1</button>
                        <button type="submit" className="ace" value="11" onClick={this.aceValue}>11</button>
                    </div>)
                }
            </div>
        )
    }
}

AceComponent.PropTypes = {
    aceCard: React.PropTypes.object.isRequired,
    chosenAceVal: React.PropTypes.func.isRequired,
    aceHasBeenChosen: React.PropTypes.bool.isRequired
};

export default AceComponent