import React, { useEffect } from "react";
import Nav from "./Nav";

function Account(props) {

    const requiredField = document.getElementById("first-name");

    useEffect(() => {
        const links = document.querySelectorAll(".link");
        const link = document.querySelector(".account-link");
        links.forEach(link => link.classList.remove("selected"));
        link.classList.add("selected");
    }, [])

    const checkValidity = () => {
        if (!(requiredField.checkValidity())) {
            requiredField.classList.add("invalid");
        } 
    }

    const removeErrorMessage = () => {
        if (requiredField.classList.contains("invalid")) {
            requiredField.classList.remove("invalid");
        }
    }
    
    return (
        <div className="container">
            <Nav amount={props.amount}/>
            <main className="account-container">
                <header>
                    <h1 className="header">Your Account</h1>
                </header>
                <p>You don't currently have an account with us. Here's a form, though:</p>
                <form action="">
                    <div className="form-section">
                        <label htmlFor="first-name">First name*</label>
                        <input type="text" id="first-name" onInput={removeErrorMessage} required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="last-name">Last name</label>
                        <input type="text" id="last-name" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="date">Today's date</label>
                        <input type="date" id="date" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="letter">Favorite letter</label>
                        <input type="text" id="letter" maxLength="1" />
                    </div>
                    <div className="form-section"><input onClick={checkValidity} className="submit" type="submit" /></div>
                </form>
            </main>
        </div>
    );
}

export default Account;