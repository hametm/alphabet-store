import React from "react";
import Nav from "./Nav";
import ShopProduct from "./ShopProduct";
import { v4 as uuid } from 'uuid';


function HangulShop(props) {

    const productList = [
        {name: "ㄱ", id: uuid(), price: 2},
        {name: "ㄲ ", id: uuid(), price: 1},
        {name: "ㄴ", id: uuid(), price: 2},
        {name: "ㄷ", id: uuid(), price: 5},
        {name: "ㄸ", id: uuid(), price: 1.50},
        {name: "ㄹ", id: uuid(), price: 3},
        {name: "ㅂ", id: uuid(), price: 1.50},
        {name: "ㅃ", id: uuid(), price: 4},
        {name: "ㅅ", id: uuid(), price: 20},
        {name: "ㅆ", id: uuid(), price: 3.50},
        {name: "ㅇ", id: uuid(), price: 2},
        {name: "ㅏ", id: uuid(), price: 5},
        {name: "ㅐ", id: uuid(), price: 3.50},
        {name: "ㅑ", id: uuid(), price: 4},
        {name: "ㅒ", id: uuid(), price: .50},
        {name: "ㅓ", id: uuid(), price: 5},
        {name: "ㅔ", id: uuid(), price: 4.50},
        {name: "ㅕ", id: uuid(), price: 1.50},
        {name: "ㅖ", id: uuid(), price: 3},
        {name: "ㅗ", id: uuid(), price: 5},
        {name: "ㅘ", id: uuid(), price: 2.50},
        {name: "ㅙ", id: uuid(), price: 1},
        {name: "ㅚ", id: uuid(), price: 2},
        {name: "ㅛ", id: uuid(), price: 5},
        {name: "ㅜ", id: uuid(), price: 3},
        {name: "ㅝ", id: uuid(), price: 50},
        {name: "ㅞ", id: uuid(), price: 2},
        {name: "ㅟ", id: uuid(), price: 5},
        {name: "ㅠ", id: uuid(), price: 3},
        {name: "ㅡ", id: uuid(), price: 50},
        {name: "ㅢ", id: uuid(), price: 3},
        {name: "ㅣ", id: uuid(), price: 2},
        {name: "ㅈ", id: uuid(), price: 5},
        {name: "ㅉ", id: uuid(), price: 3},
        {name: "ㅊ", id: uuid(), price: 2.50},
        {name: "ㅋ", id: uuid(), price: 3},
        {name: "ㅌ", id: uuid(), price: 4},
        {name: "ㅍ", id: uuid(), price: 3.50},
        {name: "ㅎ", id: uuid(), price: 1},
      ];

    const showProducts = productList.map(product => {
        return (
            <div key={uuid()} className="product-container">
                <ShopProduct 
                    name={product.name}
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
                    <h1 className="header">All Hangul Letters</h1>
                </header>
                <div className="products">{showProducts}</div>
            </main>
        </div>
    );
}

export default HangulShop;