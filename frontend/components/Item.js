

function Item({ id, name, price }) {
    const handleAddToCart = () => {
        addToCart(id, 1);
    };

    return (
        <div className="item">
            <h3>{name}</h3>
            <p>${price.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default Item;