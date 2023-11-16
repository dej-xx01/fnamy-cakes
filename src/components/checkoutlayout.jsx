import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
export default function CheckoutLayout(){
    return(
        <>
            <header>
                {/* <img src="../images/Rectangle 69.jpg" alt="rectangle 69" /> */}
                <h1>Checkout</h1>
            </header>
            <div className="checkout-container">
                <div className="checkout-nav">
                    <ul>
                        <li><Link to= ".">Delivery</Link></li>
                        <li><Link to = "payment">Payment</Link></li>
                        <li><Link to = "summary">Summary</Link></li>
                    </ul>
                    <div className="underline"><span></span></div>
                </div>
            </div>
            <Outlet/>         
        </>
    )
}