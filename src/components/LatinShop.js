import React from "react";
import Nav from "./Nav";
import ShopProduct from "./ShopProduct";
import { v4 as uuid } from 'uuid';


function LatinShop(props) {

    const productList = [
        {name: "A", id: uuid(), price: 2},
        {name: "B", id: uuid(), price: 1},
        {name: "C", id: uuid(), price: 2},
        {name: "D", id: uuid(), price: 5},
        {name: "E", id: uuid(), price: 1.50},
        {name: "F", id: uuid(), price: 3},
        {name: "G", id: uuid(), price: 1.50},
        {name: "H", id: uuid(), price: 4},
        {name: "I", id: uuid(), price: 20},
        {name: "J", id: uuid(), price: 3.50},
        {name: "K", id: uuid(), price: 2},
        {name: "L", id: uuid(), price: 5},
        {name: "M", id: uuid(), price: 3.50},
        {name: "N", id: uuid(), price: 4},
        {name: "O", id: uuid(), price: .50},
        {name: "P", id: uuid(), price: 5},
        {name: "Q", id: uuid(), price: 4.50},
        {name: "R", id: uuid(), price: 1.50},
        {name: "S", id: uuid(), price: 3},
        {name: "T", id: uuid(), price: 5},
        {name: "U", id: uuid(), price: 2.50},
        {name: "V", id: uuid(), price: 1},
        {name: "W", id: uuid(), price: 2},
        {name: "X", id: uuid(), price: 5},
        {name: "Y", id: uuid(), price: 3},
        {name: "Z", id: uuid(), price: 50},

      ];

    const showProducts = productList.map(product => {
        return (
            <div className="product-container">
                <ShopProduct 
                            name={product.name}
                            key={product.id}
                            price={product.price}
                            addToCart={props.addToCart}
                            product={product}
                />
            </div>
        );            
    });
    
    return (
        <div className="container">
            <Nav amount={props.amount}/>
            <main className="shop-container">
                <header>
                    <h1 className="header">All Latin Letters</h1>
                </header>
                <div className="products">{showProducts}</div>
            </main>
        </div>
    );
}

export default LatinShop;