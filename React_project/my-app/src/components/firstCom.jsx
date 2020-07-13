import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.css";
import ShopList from "./thingBuy.jsx"
class ShoppingCart extends Component {
    render() { 
        return (
    <div class="container">
        <div class="d-flex flex-row justify-content-center mb-2">
            <h1 className="justify-content-center">Shopping Cart</h1>
        </div>
        <div>
            <ShopList name="Chilli" price="2" amount="30" />
            <ShopList name="Potato" price="5" amount="213" />
            <ShopList name="Cabbage" price="3" amount="34" />
        </div>
        
    </div>
        );
    }
}
 
export default ShoppingCart;