import React from "react";
import { Link } from "react-router-dom";
import logo from "../styles/images/logo.png";
import cart from "../styles/images/cart.png";

const Nav = (props) => {
    return (
        <nav>
            <Link style={{textDecoration: "none"}} to="/">
                <div id="logo">
                    <img className="logo" src={logo} alt="logo" />
                    <h4>The Alphabet Store</h4>
                </div>
            </Link>
            <ul>
                <Link style={{textDecoration: "none"}} to="/">
                    <li className="links">Home</li>
                </Link>
                <Link style={{textDecoration: "none"}} to="/latin-shop">
                    <li className="links">Latin Shop</li>
                </Link>
                <Link style={{textDecoration: "none"}} to="/hangul-shop">
                    <li className="links"><span className="hangul-link"><strong>New: </strong></span>Hangul Shop</li>
                </Link>
                <Link style={{textDecoration: "none"}} to="/cart">
                    <li>
                        <div id="cart">
                            <img src={cart} alt="cart" />
                            {props.amount}
                        </div>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;