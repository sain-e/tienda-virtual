import React, { useState } from "react";

const Shop = () => {
    const [products, setProducts] = useState([]);

    function getProducts() {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }

    return ( 
        <div>
            <h1>Productos</h1>
            
            <button onClick={getProducts}>Mostrar Productos</button>

            <div>
                { products.map((product) => (
                    <div key={product.id}> 
                        <p>{product.title}</p>
                        <img src={product.image} alt={product.title} />
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop;