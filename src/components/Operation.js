import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { Snackbar } from '@material-ui/core';

class Operation extends Component {
    constructor() {
        super()
        this.state = {
            isRedirect: false,
            openSnackbar: false,
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


    addTransaction = async (isWithdraw) => {
        let realAmount = this.state.amount
        if(isWithdraw){
            realAmount *= -1
            // console.log(realAmount);
            // console.log(this.props.balance);
            if (this.props.balance >= 500 && this.props.balance + realAmount < 500) {
                this.setState({ openSnackbar: true })
            }
            else{
                await this.doTrans(realAmount)
            }
        }
        else {
            await this.doTrans(realAmount);
        }
    }
      

    async doTrans(realAmount) {
        let transaction = { amount: realAmount, vendor: this.state.vendor, category: this.state.category };
        if (transaction.amount !== "" && transaction.vendor !== "" && transaction.category !== "") {
            await axios.post(`http://localhost:5000/transaction`, transaction);
            this.props.getData();
            this.setState({ isRedirect: true });
        }
    }

    render() {
        return (
            this.state.isRedirect ? 
            <Redirect to="/transactions"/> :
            <div>
                <input name="amount" value={this.state.amount} type='number' onChange={this.changedState} placeholder='Amount' />
                <input name="vendor" value={this.state.vendor} type='text' onChange={this.changedState} placeholder='Vendor' />
                <input name="category" value={this.state.category} type='text' onChange={this.changedState} placeholder='Category' />
                <div class="operations">
                    <button class="block green" onClick={() => this.addTransaction(false)} >Deposit</button>
                    <button class="block red" onClick={() => this.addTransaction(true)} >Withdraw</button>
                </div>

                    <Snackbar
                        open={this.state.openSnackbar}
                        message="below 500"
                    />

            </div>
        );
    }
}

export default Operation;