import React, { Component } from 'react';

class Transaction extends Component {

    render() {
        const element = this.props.element;
        // console.log(element);

        return (
            <div>
                <span>{element.amount}  </span>
                <span>{element.vendor}  </span>
                <span>{element.category}  </span>
            </div>
        );
    }
}

export default Transaction;