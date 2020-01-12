import React, { Component } from 'react';
import Transaction from './Transaction'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Category from './Category'
class Transactions extends Component {
    deleteTrans= (id)=>{
        this.props.deleteTrans(id)
    }

    
    render() {
        return (
            <Router>
            <div>
                <div><Link to='./Category'> Transactions per Category: </Link></div>
                <hr></hr>
                <Route exact path='/Category' render={()=>
                <Category transactions={this.props.transactions} />}/>
                {this.props.transactions.map(t=> 
                 {return <Transaction key={t._id} deleteTrans={this.deleteTrans} transId={t._id} amount={t.amount} vendor={t.vendor} category={t.category} /> })}
            </div>
            </Router>
        );
    }
}

export default Transactions;