import React, {useState } from "react";
import { Link } from "react-router-dom";
export default function Nav(props){
    // const cartedItems = JSON.parse(localStorage.getItem("cart"))
    const len = props.cart.length

    const [isClicked, setIsClicked] = useState(false)
    
    const viewMenu = () =>{
        setIsClicked(isClicked => !isClicked)
        console.log(isClicked)
    }

    return(
        <>
        {!isClicked && <img src="../images/hamburger-menu.png" alt="hamburger-menu" className="hamburger-menu" onClick={viewMenu}/>}
        <nav>
            <div className="nav-bar">
            <div className="nav-box">
                <h1>Fnamy<span>Cakes</span></h1>
            </div>
            <div className="nav-box">
                {isClicked && <img src="../images/exit.png" alt="exit-icon" className="exit-icon" onClick={viewMenu}/>}
                <ul id= {isClicked ? "menu" : undefined} >
                    <li><Link to= "." onClick={viewMenu}>Home</Link></li>
                    <li> <Link to= "birthday-cakes" onClick={viewMenu}>Cakes</Link></li>
                    <li><Link to = "."  href ="#reviews" onClick={viewMenu}>Reviews</Link></li>
                    <li><a href="#footer" onClick={viewMenu}>Contact</a></li>
                </ul>
            </div>
            <div className="nav-box">
                <ul>
                    <li><img src="../images/Ellipse 22.png" alt="profile-image" /></li>
                    <li><img src="../images/heart-3510.png" alt="favorite" /></li>
                    {/* <li id={cartedItems.length > 0 && "nav-cart-btn"}> */}
                    {!isClicked && <li id={len > 0 && "nav-cart-btn"}>
                        <Link to= "cart"><img src="../images/cart.png" alt="cart" /></Link>
                    </li>}
                </ul>
            </div>  
            </div>  
        </nav>
        </>
    )
}