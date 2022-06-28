import React from "react";

const TextInput = React.forwardRef((props, ref) => {
    <input type="text" placeholder="Hello" ref={ref} />
});

const inputRef = React.createRef();

class ForwardingRef extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log('aa');
    };

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <TextInput ref={inputRef} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default ForwardingRef;