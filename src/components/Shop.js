import React from "react";
import Nav from "./Nav";
import ShopProduct from "./ShopProduct";
import a from "../styles/images/a.png";
import b from "../styles/images/b.png";
import c from "../styles/images/c.png";
import d from "../styles/images/d.png";
import e from "../styles/images/e.png";
import f from "../styles/images/f.png";
import g from "../styles/images/g.png";
import h from "../styles/images/h.png";
import i from "../styles/images/i.png";
import j from "../styles/images/j.png";
import k from "../styles/images/k.png";
import l from "../styles/images/l.png";
import m from "../styles/images/m.png";
import n from "../styles/images/n.png";
import o from "../styles/images/o.png";
import p from "../styles/images/p.png";
import q from "../styles/images/q.png";
import r from "../styles/images/r.png";
import s from "../styles/images/s.png";
import t from "../styles/images/t.png";
import u from "../styles/images/u.png";
import v from "../styles/images/v.png";
import w from "../styles/images/w.png";
import x from "../styles/images/x.png";
import y from "../styles/images/y.png";
import z from "../styles/images/z.png";


import { v4 as uuid } from 'uuid';


function Shop(props) {

    const productList = [
        {name: "A", id: uuid(), image: a, price: 2},
        {name: "B", id: uuid(), image: b, price: 1},
        {name: "C", id: uuid(), image: c, price: 2},
        {name: "D", id: uuid(), image: d, price: 5},
        {name: "E", id: uuid(), image: e, price: 1.50},
        {name: "F", id: uuid(), image: f, price: 3},
        {name: "G", id: uuid(), image: g, price: 1.50},
        {name: "H", id: uuid(), image: h, price: 4},
        {name: "I", id: uuid(), image: i, price: 20},
        {name: "J", id: uuid(), image: j, price: 3.50},
        {name: "K", id: uuid(), image: k, price: 2},
        {name: "L", id: uuid(), image: l, price: 5},
        {name: "M", id: uuid(), image: m, price: 5},
        {name: "N", id: uuid(), image: n, price: 5},
        {name: "O", id: uuid(), image: o, price: 5},
        {name: "P", id: uuid(), image: p, price: 5},
        {name: "Q", id: uuid(), image: q, price: 5},
        {name: "R", id: uuid(), image: r, price: 5},
        {name: "S", id: uuid(), image: s, price: 5},
        {name: "T", id: uuid(), image: t, price: 5},
        {name: "U", id: uuid(), image: u, price: 5},
        {name: "V", id: uuid(), image: v, price: 5},
        {name: "W", id: uuid(), image: w, price: 5},
        {name: "X", id: uuid(), image: x, price: 5},
        {name: "Y", id: uuid(), image: y, price: 5},
        {name: "Z", id: uuid(), image: z, price: 5},

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
                    <h1>All Letters</h1>
                </header>
                <div className="products">{showProducts}</div>
            </main>
        </div>
    );
}

export default Shop;