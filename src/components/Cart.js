import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import CartProduct from "./CartProduct";
import { v4 as uuid } from 'uuid';

function Cart(props) {

    const [superDiscount, setSuperDiscount] = useState(0);

    useEffect(() => {
        if (props.amount > 0) {
            setSuperDiscount(.01);
        }
        if (props.amount === 0) {
            setSuperDiscount(0);
        }
    }, [props.amount]);

    useEffect(() => {
        for (let i = 0; i < props.list.length; i++) {
            if (props.list[i].amount === 0) {
                const container = document.getElementById(props.list[i].name);
                if (container) {
                    container.remove();
                }
            }
        }
    });

    useEffect(() => {
        const summary = document.querySelector("#summary");
        const message = document.querySelector("#empty-cart");
        if (props.amount > 0) {
            summary.classList.remove("hidden");
            message.classList.add("hidden");
        }
        if (props.amount === 0) {
            summary.classList.add("hidden");
            message.classList.remove("hidden");
        }
    });

    const displayCart = props.list.map(product => {
        return (
            <CartProduct
                name={product.name}
                key={uuid()}
                list={props.list}
                price={product.price}
                product={product}
                increaseQuantity={props.increaseQuantity}
                decreaseQuantity={props.decreaseQuantity}
                removeItem={props.removeItem} 
            />
        );
    });
    
    return (
        <div className="container">
            <Nav amount={props.amount}/>
            <main className="cart-container">
                <header>
                    <h1 className="header">Your Cart</h1>
                </header>
                <h2 id="empty-cart">Nothing to see here! Your cart is empty.</h2>
                <div className="cart">
                    <div className="cart-products">{displayCart}</div>
                    <div className="hidden" id="summary">
                        <div className="summary">
                            <h2>Summary</h2>
                            <div className="total">
                                <p>Items</p><p>${(props.price).toFixed(2)}</p>
                            </div>
                            <div className="total discount-text">
                                <p>Super Discount</p><p>-${(superDiscount).toFixed(2)}</p>
                            </div>
                            <hr></hr>
                            <div className="total total-text">
                                <h3>Total</h3><h3>${(props.price - superDiscount).toFixed(2)}</h3>
                            </div>
                            <button className="checkout-button">Check out</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;