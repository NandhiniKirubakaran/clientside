import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../Redux/Reducers/cart.slice'
import Navbar from '../Component/Navbar/index';
import ProductCard from '../Component/ProductCard/index';

export default function ProductsListings() {
  // const {cart, items}  = useSelector((state) => state.cart);
  const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Dosa Tava',
            price: 299
        },
        {
            id: 2,
            name: 'Pressure Cooker',
            price: 1266
        },
        {
            id: 3,
            name: 'Empty Containers',
            price: 355
        },
        {
            id: 4,
            name: 'Knife',
            price: 78
        },
  ]);
  const [cart, setCart] = useState([]);

  const manipulateCart = (data) => {
    if(data) {
       const cartCopy = [...cart];    
       cartCopy.push(data);
       setCart(cartCopy);
    }
  };

  return (
    <div className='container'>
        <Navbar />
        {/* <div className="cart-count">
            {cart && cart.length > 0 ? cart.length : 0}
        </div> */}
        <div className="listing-area">
            {
                products && products.length > 0 ? products.map((d, i) => {
                    return <ProductCard data={d} key={i} addProduct={manipulateCart} />;
            }) : <p>No Products to show</p>
            }
        </div>
    </div>
  )
}
