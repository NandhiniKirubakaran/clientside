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
               
            <div className="card-price-calculator px-3 py-5">
                <h5 className="mb-5">Total</h5>
                <div className="bill-listings" id="bill-listings">
                    <ul>
                        <li className="d-flex align-center justify-content-between">
                            <p>food name × 2</p>
                            <p>200</p>
                        </li>
                        <li className="d-flex align-center justify-content-between">
                            <p>food name × 2</p>
                            <p>200</p>
                        </li>
                    </ul>
                </div>
                <div className="tax-listings" id="tax-listings">
                    <ul>
                        <li className="d-flex align-center justify-content-between">
                            <p>CGST</p>
                            <p>9%</p>
                        </li>
                        <li className="d-flex align-center justify-content-between">
                            <p>SGST</p>
                            <p>9%</p>
                        </li>
                    </ul>
                </div>
                <div className="" id="price-listings">
                    <ul>
                        <li className="d-flex align-center justify-content-between">
                            <h5 className="fw-bolder">Grand Total</h5>
                            <h5 className="fw-bolder">1000</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}