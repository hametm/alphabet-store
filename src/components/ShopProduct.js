function ShopProduct(props) {
    return (
        <div className="shop-product-container">
            <figure>
                <div className="shop-product-image">{props.name}</div>
                <figcaption>
                    <p>${(props.price).toFixed(2)}</p>
                </figcaption>
            </figure>
            <button className="add-button" onClick={() => props.addToCart(props.product)}>Add to cart</button>
        </div>
    );
}

export default ShopProduct;