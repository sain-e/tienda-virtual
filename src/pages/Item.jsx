import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Item = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [quantity, setQuantity] = useState(0);
    const [mensajeError, setMensajeError] = useState('');
    const [detallesProducto, setDetallesProducto] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setDetallesProducto(data))
        .catch(error => {
            setMensajeError('No hay información suficiente');
            console.error(error);
        })
    }, []);

    const irShop = () => {
        navigate("/shop");
    }

    const addCart = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const irCart = () => {
        const qQuantity = quantity;
        const qIdProduct = detallesProducto.id;
        navigate(`/cart?quantity=${encodeURIComponent(qQuantity)}&id=${encodeURIComponent(qIdProduct)}`);
    }

    return (
        <div>
            { mensajeError ? <p className="mensaje-error">{mensajeError}</p> :
                <div className="item-details"> 
                    <h2>{detallesProducto.title}</h2>
                    <p><strong>{detallesProducto.category}</strong></p>
                    <img src={detallesProducto.image} alt={detallesProducto.title} />
                    <p>{detallesProducto.description}</p>
                    <p><strong>{detallesProducto.price}</strong></p>
                    <button onClick={irShop}>Volver</button>
                    <button onClick={addCart}>Añadir al Carrito</button>
                    <button onClick={irCart}>Ir carrito</button>
                </div>
            }
        </div>
    );
}

export default Item;