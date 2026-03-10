import React, {useEffect, useState} from "react";
function shop() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Fetch products from API
    }, []);
    return (
        <div>
            <h1>Shop</h1>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>${product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
}

export default shop; 