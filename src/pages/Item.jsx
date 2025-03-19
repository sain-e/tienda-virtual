import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Item = () => {
    const { id } = useParams();
    const navigate = useNavigate();

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
                    <button>Añadir al Carrito</button>
                </div>
            }
        </div>
    );
}

export default Item;