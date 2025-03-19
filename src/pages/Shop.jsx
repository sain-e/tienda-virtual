import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';


const Shop = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => {
            setMensaje('No hay productos para mostrar');
            console.error(error);
        })
    }, []);

    const viewDetails = (id) => {
        navigate(`/item/${id}`);
    }

    return ( 
        <div className="container-shop">
            <h1>Productos</h1>

            <div className="container-products">
                { mensaje ? <p className="mensaje-error">{mensaje}</p> : 
                products.map((product) => (
                    <div key={product.id} className="shop-item"> 
                        <p>{product.title}</p>
                        <img src={product.image} alt={product.title} />
                        <p>{product.price}</p>
                        <button className="itemDetails-btn" onClick={() => viewDetails(product.id)}>Ver detalles</button>
                        <button className="addCart-btn">Añadir al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop;