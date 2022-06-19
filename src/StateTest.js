import React from "react";

class StateTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayBio: this.props.data
        }
        console.log('props : ' , props)
        console.log('state : ' , this.state)
        console.log('Component this ', this);
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {
        return (
            <div>
                {this.state.displayBio ?
                    (<div>
                        <h4>Hello React</h4>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>) :
                    (<div>
                        <button onClick={this.toggleDisplayBio}>Show more</button>
                    </div>
                    )}
            </div>
        );
    }
}

export default StateTest;