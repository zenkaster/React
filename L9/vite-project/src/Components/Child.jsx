import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <h1>{this.props.user.age}</h1>
            </div>
        );
    }
}

export default Child;
