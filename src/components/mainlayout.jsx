import React, { useEffect, useState } from "react";
import Nav from "./nav";
import Footer from "./footer";
import {Outlet} from "react-router-dom"
export default function MainLayout(){
    const [cart, setCart] = useState([])
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    // localStorage.setItem("cart", JSON.stringify(cart))
    const addToCartBtn = (cake) => {
        // const newCart = [...cart, cake]
        const newCart = [cake, ...cart]
        setCart(cart => {
            return newCart
        })
    }
    
    const deleteBtn = (id) =>{
        setCart((prevCart) =>{
            const updatedCart = cart.filter((cake) => cake.id !== id)
            return updatedCart
        })
    }
    const context = {
        cart,
        addToCartBtn,
        deleteBtn
    }
    return(
        <main>
            <Nav cart = {cart}/>
            <Outlet context={context}/>
            <Footer/> 
        </main>
    )
}