import React, { Component } from 'react';

class Transaction extends Component {
    deleteTrans= ()=>{
        this.props.deleteTrans(this.props.transId)
    }

    render() {
        return (
            <div>
           {this.props.amount > 0 ? <div className="Green">
                <div>{this.props.amount}</div>
                <div>{this.props.vendor}</div>
                <div>{this.props.category}</div>
                <button onClick={this.deleteTrans}>Delete</button>
            </div> : <div className="Red">
            <div>{this.props.amount}</div>
            <div>{this.props.vendor}</div>
            <div>{this.props.category}</div>
            <button onClick={this.deleteTrans}>Delete</button>
        </div>}
        </div>
        );
    }
}

export default Transaction;