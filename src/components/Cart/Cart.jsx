import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Cart = () => {
    const [searchParams] = useSearchParams();
    
    const quantity = searchParams.get("quantity"); // Leer el querystring
    const id = searchParams.get("id");
    
    const [mensajeError, setMensajeError] = useState('');
    const [detallesProducto, setDetallesProducto] = useState({});

    const carrito = [];

    carrito.push({quantity, detallesProducto});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setDetallesProducto(data))
        .catch(error => {
            setMensajeError('No hay información suficiente');
            console.error(error);
        })
    }, []);
    

    return (
        <div>
            <h1>Tu carrito</h1>
            { mensajeError ? <p className="mensaje-error">{mensajeError}</p> :
            <div>
                { carrito.map((carrito, index) => (
                    <p key={index}>{detallesProducto.title} ... cantidad: {carrito.quantity}</p>
                )) }
            </div>
            }
        </div>
    );
}

export default Cart;