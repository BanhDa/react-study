import React from "react";

class UniquenessKeys extends React.Component {

    constructor() {
        super();

        this.data = [
            { id: 1, title: 'first', content: 'Mot' },
            { id: 2, title: 'second', content: 'Hai' },
            { id: 3, title: 'third', content: 'Ba' },
        ]
    }

    render() {
        return (
            <MenuBlog data={this.data} />
        );
    };
}

function MenuBlog(props) {
    const titleBar = (
        <ol>
            {props.data.map((show) =>
                <li id={show.id}>
                    {show.title}
                </li>
            )}
        </ol>
    );

    const content = props.data.map((show) => 
        <div id={show.id}>
            <h3>{show.title} : {show.content}</h3>
        </div>
    );

    return (
        <div>
            {titleBar}
            <hr />
            {content}
        </div>
    );
}

export default UniquenessKeys;