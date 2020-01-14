import React, { Component } from 'react';
import axios from 'axios'

class Transaction extends Component {
      
    deleteTrans = async () => {
        let id = this.props.transaction._id
        console.log(id)
        await axios.delete(`http://localhost:5000/transactions/${id}`);
        this.props.getData()
      }
      
    
    render() {
        let t = this.props.transaction
        return (
            <div className= {t.amount >= 0 ? "Green" : "Red" }>
                <button onClick={this.deleteTrans}>Delete</button>
                <span>     {t.amount}, </span>
                <span>{t.vendor}, </span>
                <span>{t.category}</span>
            </div>
        );
    }
}

export default Transaction;