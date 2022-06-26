import React from "react";
import PropTypes from 'prop-types';

class PropsTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            age: 27
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Default Prop Example</h1>
                    <h3>Welcome to {this.props.name}</h3>
                    <Age age={this.state.age} />
                </div>

                <div>
                    <h1>Props Validation Example</h1>
                    <table>
                        <tr>
                            <th>Type</th>
                            <th>Value</th>
                            <th>Valid</th>
                        </tr>
                        <tr>
                            <th>Array</th>
                            <th>{this.props.propArray}</th>
                            <th>{this.props.propArray ? 'true' : 'false'}</th>
                        </tr>
                        <tr>
                            <th>Boolean</th>
                            <th>{this.props.propBool ? 'true' : 'false'}</th>
                            <th>{this.props.propBool ? 'true' : 'false'}</th>
                        </tr>
                        <tr>
                            <th>Function</th>
                            <th>{this.props.propFunc(5)}</th>
                            <th>{this.props.propFunc(5) ? 'true' : 'false'}</th>
                        </tr>
                        <tr>
                            <th>String</th>
                            <th>{this.props.propString}</th>
                            <th>{this.props.propString ? 'true' : 'false'}</th>
                        </tr>
                        <tr>
                            <th>Number</th>
                            <th>{this.props.propNumber}</th>
                            <th>{this.props.propNumber ? 'true' : 'false'}</th>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }

}

PropsTest.propTypes = {
    propArray: PropTypes.array.isRequired,  
    propBool: PropTypes.bool.isRequired,  
    propFunc: PropTypes.func,  
    propNumber: PropTypes.number,  
    propString: PropTypes.string,
}

PropsTest.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (x) { return x + 5 },
    propNumber: 5,
    propString: 'Java',
    name: 'Tuan',
}

class Age extends React.Component {
    render() {
        return (
            <h3>Age: {this.props.age}</h3>
        );
    }
}

export default PropsTest;