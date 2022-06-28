import React from "react";

class Refs extends React.Component {

    constructor(props) {
        super(props);

        this.callRef = React.createRef();
        this.callRefInput = React.createRef();

        this.addingRefInput = this.addingRefInput.bind(this);
    }

    focusRefInput() {
        this.callRefInput.current.focus();
    }

    addingRefInput() {
        this.callRef.current.focus();
        this.callRef.current.value = "hihihi";
    }

    render() {
        return (
            <div>
                <h2>Adding Ref to DOM element</h2>
                <input type="text" ref={this.callRef} />
                <input type="button" value="Add text input" onClick={this.addingRefInput} />
                <hr/>
                <CustomInput />
            </div>
        );
    }
}

function CustomInput(props) {
    let callRefInput = React.createRef();

    function handleClick() {
        callRefInput.current.focus();
        callRefInput.current.value = "hihihi";
    }

    return (
        <div>
            <h2>Custome Input</h2>
            <input type="text" ref={callRefInput} />
            <input type="button" value="Focus Input" onClick={handleClick} />
        </div>
    );

}


export default Refs;