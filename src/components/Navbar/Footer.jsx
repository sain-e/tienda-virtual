import React from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Footer.module.css"; // Import CSS module


const Footer = () => {
return (
    <nav className={styles.footer}>
    <div className={styles.footer}>    
    </div>
    <ul className={styles.footerLinks}>
        <li><Link to="/">Facebook</Link></li>
        <li><Link to="/">Intagram</Link></li>
        <li><Link to="/">Twitter</Link></li>
        <li><Link to="/">What'sApp</Link></li>
    </ul>

    </nav>
);
};

export default Footer;