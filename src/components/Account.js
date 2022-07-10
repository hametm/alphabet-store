import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Account(props) {
    
    return (
        <div className="container">
            <Nav amount={props.amount}/>
            <main className="account-container">
                <header>
                    <h1 class="header">Your Account</h1>
                </header>
                <p>You don't currently have an account with us.</p>
                <Link style={{textDecoration: "none"}} to="/">
                    <button className="account-button">All righty then</button>
                </Link>
            </main>
        </div>
    );
}

export default Account;