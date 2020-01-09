import React, { Component } from "react";

class Operations extends Component {
  render() {
    return <div>
        <input>Amount</input>
        <input>Vendor</input>
        <input>Category</input>

        <button>Deposit</button>
        <button>Withdraw</button>
    </div>;
  }
}

export default Operations;
