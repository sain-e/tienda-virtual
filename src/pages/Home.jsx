import React from "react";
import "../components/Navbar/Navbar.module.css";

const Home = () => {
    return (
        <div className="descripcion">
            <img src="/modelo.jpg" alt="a" />
            <p>
                Bienvenido a Tienda Nube, tu destino en línea para descubrir
                las últimas tendencias en moda y accesorios. Nuestra plataforma
                ofrece una amplia selección de prendas y complementos diseñados
                para satisfacer todos los estilos y ocasiones. Ya sea que busques
                un atuendo casual para el día a día o una pieza especial para un
                evento, en Tienda Nube encontrarás opciones que reflejan calidad,
                elegancia y autenticidad. Explora nuestras colecciones y actualiza
                tu guardarropa con productos que te harán sentir seguro y a la moda.
            </p>
        </div>
    );
};

export default Home;
