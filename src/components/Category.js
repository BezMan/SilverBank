import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
class Category extends Component {
    transByCategory=()=>{
        let obj={}
        for (let i=0; i<this.props.transactions.length ; i++) {
            let category=this.props.transactions[i].category
            let amount=this.props.transactions[i].amount
               if(!obj.hasOwnProperty(category)){//obj[category]
                 obj[category]=amount
               }
               else{
                obj[category]+=amount
               }
        }
        console.log(Object.entries(obj))
        return Object.entries(obj)
    }
    
    render() {
        return (
            <div>
                {this.transByCategory().map(m=> <h2>Category: {" "+m[0]} Amount: {" "+m[1]} </h2>)}
                {this.props.category}
            </div>
        );
    }
}

export default Category;