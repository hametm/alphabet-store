function CartProduct(props) {
    return (
        <div className="cart-product-container" id={props.name}>
            <figure>
                <div className="cart-product-image">{props.name}</div>
                <figcaption>
                    <h4>The Letter "{props.name}"</h4>
                    <p>${(props.price).toFixed(2)}</p>
                </figcaption>
            </figure>
            <div className="quantity">
                <button className="quantity-button" onClick={() => props.increaseQuantity(props.product)}>+</button>
                <p>{props.product.amount}</p>
                <button className="quantity-button" onClick={() => props.decreaseQuantity(props.product)}>-</button>
            </div>
        </div>
    );
}

export default CartProduct;