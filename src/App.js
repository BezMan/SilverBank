import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Transactions from './components/Transactions';
const express = require('express')
const app = express()
const port = 3333

function App() {

  app.listen(port, function () {
    console.log("the server is running on port:" + port)
})

  const state = {
    user: "bez",
    items:
      [
        { amount: 200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ]

  }

  function calcBalance(arr){
    const res = arr.reduce((a, b) => a + b["amount"] | 0, 0); 
    console.log(res);
    return res;

  }

  return (
    <Router>
      <div className="App">
        <div id="home-background"></div>

        {/* <div id="main-links">
        <Link to="/">Go Home</Link>
        <Link to="/about">Read About</Link>
      </div> */}

      <h2>My Balance: {calcBalance(state.items)}</h2>

        <Route path="/" exact render={() =>
          <Transactions key={0} items={state.items}></Transactions>}>
        </Route>

        {/* {<Route path="/about" exact render={() => <About items={Object.keys(state)} />} />}  */}

        {/* <Route path = "/directory/:fentities" exact render={({match}) => 
    <Fentities state={state} match={match}></Fentities> }/>

    <Route path = "/directory/:fentities/:name" exact render={({match}) => 
    <Fentity state={state} match={match}></Fentity> }/> */}

      </div>
    </Router>
  );
}

export default App;
