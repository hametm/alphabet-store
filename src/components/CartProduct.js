import { useEffect } from "react";

function CartProduct(props) {

    useEffect(() => {
        for (let i = 0; i < props.list.length; i++) {
            if (props.list[i].amount === 0) {
                const container = document.getElementById(props.list[i].name);
                if (container) container.remove();
            }
        }
    });

    return (
        <div id={props.name}>
            <hr className="cart-line" />
            <div className="cart-product-container">
                <figure>
                    <div className="cart-product-image">{props.name}</div>
                    <figcaption>
                        <h4>The Letter "{props.name}"</h4>
                        <p>${(props.price).toFixed(2)}</p>
                        <button 
                            className="remove-button" 
                            onClick={() => props.removeItem(props.product)}>
                            Remove
                        </button>
                    </figcaption>
                </figure>
                <div className="quantity">
                    <button className="quantity-button" onClick={() => props.increaseQuantity(props.product)}>+</button>
                    <p>{props.product.amount}</p>
                    <button className="quantity-button" onClick={() => props.decreaseQuantity(props.product)}>-</button>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;