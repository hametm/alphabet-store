function CartProduct(props) {
    return (
        <div className="cart-item-container" id={props.name}>
            <figure>
                <div className="cart-product-image">{props.name}</div>
                <figcaption>
                    <p>${(props.price).toFixed(2)}</p>
                </figcaption>
            </figure>
            <div className="quantity">
                <button className="quantityBtn" onClick={() => props.increaseQuantity(props.product)}>+</button>
                <p>{props.product.amount}</p>
                <button className="quantityBtn" onClick={() => props.decreaseQuantity(props.product)}>-</button>
            </div>
        </div>
    );
}

export default CartProduct;