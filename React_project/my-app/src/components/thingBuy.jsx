
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.css";
class ShopList extends Component {
    imageURL="";
    amount=0;
    constructor(props){
        super(props);
        this.name = props.name;
        this.price = props.price;
        this.imgURL = props.imgURL;
        this.amount = props.amount;
    }
   add(){
       let amount =parseInt(this.amount);
       amount++;
       this.amount = amount+"";
   }
   rev(){
       this.amount = this.amount-1;
   }
    render() { 
        return ( 
            <div className="row mb-2">
                <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start">
                    <h3>{this.name}</h3>
                    <img className="img-fluid" src={this.imgURL}></img>
                </div>
                <div className="col-lg-6 d-flex flex-row justify-content-end align-items-center">
                    <button onClick={this.add()}>Add</button>
                    <span>{this.amount}</span>
                    <button onClick={this.rev()}>Remove</button>
                </div>
            </div>
         );
    }
}
 
export default ShopList;