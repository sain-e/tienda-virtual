import React from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css"; // Import CSS module
import logo from "../../assets/logo1.png"; // Import logo

const Navbar = () => {
return (
    <nav className={styles.navbar}>
    <div className={styles.logo}>
        <img src={logo} alt="Logo" />
    </div>
    <ul className={styles.navLinks}>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/item">Item </Link></li>
        <li><Link to="/shop">Shop 🛒</Link></li>
        <li><Link to="/contact">Contact 📞</Link></li>
    </ul>
    </nav>
);
};

export default Navbar;