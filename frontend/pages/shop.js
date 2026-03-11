// Fetch products from the backend and display them
async function fetchProducts() {
    try {
        const response = await fetch('/api/products/');
        const products = await response.json();

        const container = document.getElementById('product-container');
        container.innerHTML = ''; // Clear existing products

        products.forEach(product => {
            container.innerHTML += `
                <div class="product">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>$${product.price.toFixed(2)}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    } finally {
        // Hide the loading spinner
        document.getElementById('loading').style.display = 'none';
    }
}

// Call the function to fetch products when the page loads
window.onload = fetchProducts;
