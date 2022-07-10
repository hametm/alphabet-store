import React from "react";
import Nav from "./Nav";
import ShopProduct from "./ShopProduct";
import { v4 as uuid } from 'uuid';


function IcelandicShop(props) {

    const productList = [
        {name: "A", id: uuid(), price: 2},
        {name: "Á", id: uuid(), price: 1},
        {name: "B", id: uuid(), price: 2},
        {name: "D", id: uuid(), price: 5},
        {name: "Ð", id: uuid(), price: 1.50},
        {name: "E", id: uuid(), price: 3},
        {name: "É", id: uuid(), price: 1.50},
        {name: "F", id: uuid(), price: 4},
        {name: "G", id: uuid(), price: 20},
        {name: "H", id: uuid(), price: 3.50},
        {name: "I", id: uuid(), price: 2},
        {name: "Í", id: uuid(), price: 5},
        {name: "J", id: uuid(), price: 3.50},
        {name: "K", id: uuid(), price: 4},
        {name: "L", id: uuid(), price: .50},
        {name: "M", id: uuid(), price: 5},
        {name: "N", id: uuid(), price: 4.50},
        {name: "O", id: uuid(), price: 1.50},
        {name: "Ó", id: uuid(), price: 3},
        {name: "P", id: uuid(), price: 5},
        {name: "R", id: uuid(), price: 2.50},
        {name: "S", id: uuid(), price: 1},
        {name: "T", id: uuid(), price: 2},
        {name: "U", id: uuid(), price: 5},
        {name: "Ú", id: uuid(), price: 3},
        {name: "V", id: uuid(), price: 50},
        {name: "X", id: uuid(), price: 50},
        {name: "Y", id: uuid(), price: 50},
        {name: "Ý", id: uuid(), price: 50},
        {name: "Þ", id: uuid(), price: 50},
        {name: "Æ", id: uuid(), price: 50},
        {name: "Ö", id: uuid(), price: 50},
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
                    <h1>Icelandic Letters</h1>
                </header>
                <div className="products">{showProducts}</div>
            </main>
        </div>
    );
}

export default IcelandicShop;