
import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Item from './pages/Item';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
