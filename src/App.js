
import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Item from './pages/Item';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/Footer'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
