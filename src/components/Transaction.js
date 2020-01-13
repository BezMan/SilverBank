import React, { Component } from 'react';
import axios from 'axios'

class Transaction extends Component {

    constructor(props) {
        super(props);
        this.t = this.props.transaction
      }
      
    deleteTrans = async () => {
        let id = this.t._id
        console.log(id)
        await axios.delete(`http://localhost:5000/transactions/${id}`);
        this.props.getData()
      }
      
    
    render() {
        return (
            <div className= {this.t.amount >= 0 ? "Green" : "Red" }>
                <button onClick={this.deleteTrans}>Delete</button>
                <span>     {this.t.amount}, </span>
                <span>{this.t.vendor}, </span>
                <span>{this.t.category}</span>
            </div>
        );
    }
}

export default Transaction;