import React from "react";
import CartContainer from "./cart-container";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Cart(){
    // const cartedItems = JSON.parse(localStorage.getItem("cart"))
    const {cart} = useOutletContext()

    return(
        <>
        <header>
            <h1>Cart</h1>
        </header>
        {cart.length > 0 && <div className="cart-body">
            {/* {cartedItems.map(cake =>{
                return <CartContainer cake = {cake}/>
            })} */}
            {cart.map(cake =>{
                return <CartContainer cake = {cake}/>
            })}
            <Link to = "/checkout"><button id="checkout-btn">Proceed to Checkout</button></Link>
        </div>}
        </>
    )
}