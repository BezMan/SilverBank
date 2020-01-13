import React, { Component } from 'react';
import Transaction from './Transaction'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Category from './Category'
class Transactions extends Component {
    
    render() {
        return (
            <Router>
            <div>
                {/* <div><Link to='./Category'> Transactions per Category: </Link></div>
                <hr></hr>
                <Route exact path='/Category' render={()=>
                <Category transactions={this.props.transactions} />}/> */}
                {this.props.transactions.map(transaction => 
                 {return <Transaction getData={this.props.getData}  transaction={transaction}/> })}
            </div>
            </Router>
        );
    }
}

export default Transactions;