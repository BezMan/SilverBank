import React, { Component } from 'react';

class Transaction extends Component {
    deleteTrans= ()=>{
        this.props.deleteTrans(this.props.transId)
    }

    render() {
        return (
            <div className= {this.props.amount >= 0 ? "Green" : "Red" }>
                <button onClick={this.deleteTrans}>Delete</button>
                <span>     {this.props.amount}, </span>
                <span>{this.props.vendor}, </span>
                <span>{this.props.category}</span>
            </div>
        );
    }
}

export default Transaction;