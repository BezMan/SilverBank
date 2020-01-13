import React, { Component } from 'react';
import axios from 'axios'

class Operation extends Component {
    constructor() {
        super()
        this.state = {
            amount: "",
            vendor: "",
            category:""
        }
    }

    changedState =  (e) => { //updating state on each letter typed
        const name = e.target.name
        let value = e.target.value
        if (name === "amount") {
            value = parseInt(value)
        }
        this.setState({ [name]: value })
    }

    deposit= ()=>{
        let dep={amount:this.state.amount, vendor:this.state.vendor, category:this.state.category}
        if(dep.amount > 0 && dep.vendor !== "" && dep.category !== ""){
            this.addTransaction(dep)
        }

    }
        
    withdraw= ()=>{
        let dep={amount:-(this.state.amount), vendor:this.state.vendor, category:this.state.category}
        if(dep.amount < 0 && dep.vendor !== "" && dep.category !== ""){
            this.addTransaction(dep)
        }
       
    }

    addTransaction = async (transaction) => {
        await axios.post(`http://localhost:5000/transaction`, transaction)
        this.props.getData()
      }
      

    render() {
        return (
            <div>
                <input name="amount" value={this.state.amount} type='number' onChange={this.changedState} placeholder='Amount' />
                <input name="vendor" value={this.state.vendor} type='text' onChange={this.changedState} placeholder='Vendor' />
                <input name="category" value={this.state.category} type='text' onChange={this.changedState} placeholder='Category' />
                <div class="operations">
                    <button class="block green" onClick={this.deposit}>Deposit</button>
                    <button class="block red" onClick={this.withdraw}>Withdraw</button>
                </div>
            </div>
        );
    }
}

export default Operation;