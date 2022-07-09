function Product(props) {
    return (
        <figure className="product">
            <div className="product-image">{props.name}</div>
            <figcaption className="product-info">
                <p>${(props.price).toFixed(2)}</p>
            </figcaption>
        </figure>
    );
}

export default Product;