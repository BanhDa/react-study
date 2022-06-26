import React from 'react';

class LifeCycleExample extends React.Component {

    constructor(props) {
        console.log('constructor 1');
        super(props);
        console.log('constructor 2');
        this.state = {
            hello: 'Tuan'
        };
        console.log('constructor 3');
        this.changeState = this.changeState.bind(this);
        console.log('constructor 4');
    }

    render() {
        return (
            <div>
                <h1>Component's Lifecycle</h1>
                <h3>Hellp {this.state.hello}</h3>
                <button onClick={this.changeState}>Click here</button>
            </div>
        );
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    changeState() {
        this.setState(
            {
                hello: "Changed State"
            }
        );
    }

    componentWillReceiveProps(newProps) {
        console.log('component will Receive new properties. ' + newProps);
    }

    shouldComponentUpdate(newProps, newState) {
        return false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component Will UPDATE!');
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component Will UNMOUNT!')
    }
}

export default LifeCycleExample;