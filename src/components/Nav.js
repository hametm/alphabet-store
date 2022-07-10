import React from "react";
import { Link } from "react-router-dom";
import cart from "../styles/images/cart.png";

const Nav = (props) => {
    return (
        <nav>
            <Link style={{textDecoration: "none"}} to="/">
                <div className="logo">
                    <h4>The Alphabet Store</h4>
                </div>
            </Link>
            <ul>
                <div className="nav-left">
                    <Link style={{textDecoration: "none"}} to="/">
                        <li className="link">Home</li>
                    </Link>
                    <Link style={{textDecoration: "none"}} to="/latin-shop">
                        <li className="link">Latin Shop</li>
                    </Link>
                    <Link style={{textDecoration: "none"}} to="/icelandic-shop">
                        <li className="link">Icelandic Shop</li>
                    </Link>
                    <Link style={{textDecoration: "none"}} to="/hangul-shop">
                        <li className="link"><span className="hangul-link"><strong>New: </strong></span>Hangul Shop</li>
                    </Link>
                </div>
                <div className="nav-right">
                    <Link style={{textDecoration: "none"}} to="/account">
                        <li className="link">Your Account</li>
                    </Link>
                    <Link style={{textDecoration: "none"}} to="/cart">
                        <li className="cart-icon">
                            <div>
                                <img className="cart-image" src={cart} alt="cart" />
                                {props.amount}
                            </div>
                        </li>
                    </Link>
                </div>
            </ul>
        </nav>
    );
}

export default Nav;