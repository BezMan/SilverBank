import React, { Component } from 'react';
import axios from 'axios'

class Transaction extends Component {

    deleteTrans = async () => {
        let id = this.props.transId
        console.log(id)
        await axios.delete(`http://localhost:5000/transactions/${id}`);
        this.props.getData()
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