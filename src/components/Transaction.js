import React, { Component } from 'react';

class Transaction extends Component {
    deleteTrans= ()=>{
        this.props.deleteTrans(this.props.transId)
    }

    render() {
        return (
            <div className= {this.props.amount >= 0 ? "Green" : "Red" }>
                <div>{this.props.amount}</div>
                <div>{this.props.vendor}</div>
                <div>{this.props.category}</div>
                <button onClick={this.deleteTrans}>Delete</button>
            </div>
        );
    }
}

export default Transaction;