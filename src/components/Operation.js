import React, { Component } from 'react';

class Operation extends Component {
    constructor() {
        super()
        this.state = {
            amount: 0,
            vendor: "",
            category:""
        }
    }
    changeIn =  (e) => {
        const name = e.target.name
        let value = e.target.value
        if (name === "amount") {
            value = parseInt(value)
                this.setState({
                    [name]: value
                })
        }
        else {
            this.setState({
                [name]: value
            })
        }
    }
    deposit= ()=>{
        let dep={amount:this.state.amount, vendor:this.state.vendor, category:this.state.category}
        if(dep.amount>0 && dep.vendor!==""&dep.category!==""){
        this.props.deposit(dep)
        }

    }
        
    withdraw= ()=>{
        let dep={amount:-(this.state.amount), vendor:this.state.vendor, category:this.state.category}
        if(dep.amount<0 && dep.vendor!=="" & dep.category!==""){
        this.props.deposit(dep)
        }
       
    }

    render() {
        return (
            <div>
                <input name="amount" value={this.state.amount} type='number' onChange={this.changeIn} placeholder='Amount' />
                <input name="vendor" value={this.state.vendor} type='text' onChange={this.changeIn} placeholder='Vendor' />
                <input name="category" value={this.state.category} type='text' onChange={this.changeIn} placeholder='Category' />
                <div class="operations">
                    <button class="block red" onClick={this.deposit}>Deposit</button>
                    <button class="block green" onClick={this.withdraw}>Withdraw</button>
                </div>
            </div>
        );
    }
}

export default Operation;