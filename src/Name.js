import React from "react";

class Name extends React.Component {
    render() {
        return(
            <ul>
                <li>{this.props.data.name}</li>
            </ul>
        );
    }
}

export default Name;