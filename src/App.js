import './App.css';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import ProductListing from './pages/ProductListing';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import { Login } from './pages/Login';
import { SignupPage } from './pages/Signup';



function App() {
  return (
    <div className="App">
     <Navbar />

    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup-page" element={<SignupPage />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
    </Routes>
      
    </div>
  );
}

export default App;
