import React from "react";
import { useOutletContext } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
export default function CartContainer(props){
    const {deleteBtn} = useOutletContext()
    const cake = props.cake

    const deleteButton = () =>{
        deleteBtn(cake.id)
        toast("deleted!",{
            duration: 1000
        })
        // window.location.reload()
    }
    return(
        <>
        <div className="cart-container">
            <img src="../images/delete.png" alt="delete-button" id="delete-btn" onClick={deleteButton}/>
            <div className="cart-container-details">
                <h1>Product: <span>{cake.cakeName || "-"}</span></h1>
                <h1>Cake size: <span>{cake.cakeSize || "-"}</span></h1>
                <h1>Cake flavour: <span>{cake.flavour || "-"}</span></h1>
                <h1>Cake message: <span>{cake.message || "-"}</span></h1>
            </div>
            <div className="cart-container-info">
                <h1>Price: <span>#{cake.price.toLocaleString() || "-"}</span></h1>
                <h1>Quantity: <span>{cake.quantity}</span></h1>
                <h1>Subtotal: <span>{cake.price * cake.quantity}</span></h1>
            </div>
            <Toaster/>
        </div>
        </>
    )
}