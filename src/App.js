import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LatinShop from "./components/LatinShop";
import HangulShop from "./components/HangulShop";
import IcelandicShop from "./components/IcelandicShop";
import Cart from "./components/Cart";
import Account from "./components/Account";
import { v4 as uuid } from 'uuid';

function App() {
    const [cartList, setCartList] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product) => {
        for (let i = 0; i < cartList.length; i++) {
                if (cartList[i].name === product.name) {
                cartList[i].amount++;
                setCartAmount(x => x + 1);
                setTotalPrice(x => x + product.price)
                return 0;
            }
        }
        const cartProduct = { 
            name: product.name, 
            key: uuid(), 
            amount: 1, 
            price: product.price,
        };
        setCartList(cartList.concat(cartProduct));
        setTotalPrice(x => x + product.price)
        setCartAmount(x => +x + cartProduct.amount);
    }

        const increaseQuantity = (product) => {
            let index = cartList.indexOf(product);
            cartList[index].amount++;
            setCartAmount(x => x + 1);
            setTotalPrice(x => x + cartList[index].price);
        }

        const decreaseQuantity = (product) => {
            let index = cartList.indexOf(product);
            if (cartList[index].amount === 1) return 0;
            cartList[index].amount--;
            setTotalPrice(x => x - cartList[index].price);
            setCartAmount(x => x - 1);
        }

        const removeItem = (product) => {
            let index = cartList.indexOf(product);
            setCartList(cartList.filter(x => x !== cartList[index]));
            setCartAmount(x => x - product.amount);
        }

      return (
        <HashRouter basename="/">
            <Routes>
                <Route exact path = "/" element={<Home amount={cartAmount} />} />
                <Route 
                  path = "/latin-shop" 
                  element={<LatinShop addToCart={addToCart} amount={cartAmount} />} 
                />
                <Route 
                  path = "/icelandic-shop" 
                  element={<IcelandicShop addToCart={addToCart} amount={cartAmount} />} 
                />
                <Route 
                  path = "/hangul-shop" 
                  element={<HangulShop addToCart={addToCart} amount={cartAmount} />} 
                />
                 <Route 
                  path = "/account" 
                  element={<Account addToCart={addToCart} amount={cartAmount} />} 
                />
                <Route 
                  path = "/cart" 
                  element={<Cart 
                                list={cartList} 
                                amount={cartAmount} 
                                addToCart={addToCart}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                                removeItem={removeItem} 
                                price={totalPrice} 
                            />} 
                />
            </Routes>
        </HashRouter>
    );
}

export default App;