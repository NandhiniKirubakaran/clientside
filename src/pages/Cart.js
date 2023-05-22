import React from "react";
import CartListingCard from "../component/Card/CartListingCard";
import { useSelector } from "react-redux";



export default function Cart(){
    const { items = [] } = useSelector((state) => state.cart);
    return(
        <div className="app-container d-flex">
            <div className="card-product-listing p-5">
                <h5 className="mb-3">Cart Items ({items.length})</h5>
                <div className="cart-listing ">
                {
                    items && items.map ((item, index) => <CartListingCard key={index} data={item} />)
                }
                </div>
            </div>
               
            
        </div>
    );
}