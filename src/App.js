
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React, { Component } from 'react';
import Transactions from './components/Transactions'
import Operation from './components/Operation'


class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],

    }
  }

  componentDidMount = async () => {
    this.getData()
  }


  getData = async () => {
    let x = await axios.get(`http://localhost:5000/transactions`)

    const transactions = x.data;
    console.log(transactions)
    this.setState({
      transactions: transactions
    });
}


deposit = async (transaction) => {
  await axios.post(`http://localhost:5000/transaction`, transaction)
  this.getData()
}


deleteTrans = async (id) => {
  console.log(id)
  await axios.delete(`http://localhost:5000/transactions/${id}`);
  this.getData()
}


render() {
  let amount = 0
  this.state.transactions.map(t => amount += t.amount)
  return (
    <Router>
    <div>
      <div className="navigate">
      <span className="nav"><Link to='/'> Home</Link></span>
      <span className="nav"><Link to='./Operation'> Operation </Link></span>
      <span className="nav"><Link to='./Transactions'> Transactions </Link></span>
      </div>
      <hr/>
      <h1 class="title">SILVERBANK</h1>
      <h2>
        <span>Balance: </span>
        <span className={amount >= 0 ? "green": "red"} >{amount}</span> 
      </h2>
      
      <Route exact path='/operation' render={()=><Operation deposit={this.deposit} />}/>
      <Route exact path='/Transactions' render={()=><Transactions transactions={this.state.transactions} deleteTrans={this.deleteTrans} /> }/>
      
    </div>
    </Router>
  );
}
}

export default App;

