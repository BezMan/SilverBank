import React, { Component } from 'react';
import Transaction from './Transaction';

class Transactions extends Component {

    render() {
        const items = this.props.items;
        // console.log(items);
        let i = 0

        return (
            <div>
                {items.map(element => <Transaction key={i++} element={element} />)}
            </div>
        )
    }
}

export default Transactions;