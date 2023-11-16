import React, { useState } from "react";
import {Link, useOutletContext} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
export default function Order({cakeDetails, id}){
    const {addToCartBtn} = useOutletContext()
        const [addedToCart, setAddedToCart] = useState(false)
        // const addToCartBtn = (e) =>{
        //     e.preventDefault()
        //     setAddedToCart(addedToCart => !addedToCart)
        // }
        const [quantity, setQuantity] = useState(0)

        const increaseBtn = (e) =>{
            e.preventDefault()
            setQuantity(quantity => quantity + 1)
            setOrderInfo(orderInfo => {
                return {...orderInfo, quantity: quantity + 1}
            })
            console.log(orderInfo.subtotal)
        }
        const decreaseBtn = (e) =>{
            e.preventDefault()
            setQuantity(quantity => quantity === 0? 0 : quantity - 1)
            setOrderInfo(orderInfo => {
                return {...orderInfo, quantity: quantity - 1}
            })
        }

        const [orderInfo, setOrderInfo] = useState({
            cakeName: cakeDetails.cakeName,
            id: id,
            cakeSize: "",
            flavour: "",
            message: "",
            note: "",
            price: "",
            quantity: ""
        })

        let selectedPrice
        const handleClick = (e) =>{
            e.preventDefault()
            if (e.target.name === "cakeSize"){
                const selectedIndex = e.target.selectedIndex
                const selectedOption = e.target.options[selectedIndex];
                selectedPrice = selectedOption.getAttribute('price');
            }         
            setOrderInfo(orderInfo=>{
                return {...orderInfo,
                [e.target.name]: e.target.value,
                price: selectedPrice || orderInfo.price,
                
                }
            })
            console.log(orderInfo)
        }

        const textareaRef = React.createRef();
        const handleInputChange = (e) => {
          const textarea = textareaRef.current;
          textarea.style.height = 'auto'; // Reset the height to auto to allow the textarea to shrink
          textarea.style.height = textarea.scrollHeight + 'px'; // Set the height to match the scrollHeight
          setOrderInfo(orderInfo=>{
            return {...orderInfo,
                [e.target.name] : e.target.value
            }
          })
          console.log(orderInfo)
        };


        const toCartBtn = (e) =>{
            e.preventDefault()
            addToCartBtn(orderInfo)
            toast.success("Added to cart",{
                duration: 1000,
                ariaProps: {
                    role: 'status',
                    'aria-live': 'polite',
                  }
            })
        }

    return(
        <main>
            <Toaster/>
            <div className="cake-image-container">
                <img src= {cakeDetails.image} alt= {cakeDetails.cakeName} />
                <img src= {cakeDetails.otherImages[0]} alt= {cakeDetails.cakeName} />
                <img src= {cakeDetails.otherImages[1]} alt= {cakeDetails.cakeName} />
            </div>
            <div className="cake-details">
                <h1>{cakeDetails.cakeName}</h1>
                <h3>#{cakeDetails.rangeLow.toLocaleString()} - #{cakeDetails.rangeHigh.toLocaleString()}</h3>
                <h3>({cakeDetails.ratings} verified ratings)</h3>
                <h2>Available for delivery 8 hours after completing order</h2>
                <div className="product-description">
                    <p><span>Product description:<br/></span> {cakeDetails.description}</p>
                </div>
                <form>
                    <div className="cake-size-container">
                        <label htmlFor="cake-size">Cake Size :</label>
                        <select className="cake-size" id="cake-size" onChange={handleClick} value={orderInfo.cakeSize} name="cakeSize"> 
                            <option value="">select an option</option>
                            <option value="8" price = {cakeDetails.rangeLow}> 8"</option>
                            <option value="10">10"</option>
                            <option value="12" price = {cakeDetails.rangeHigh}>12"</option>
                        </select>
                    </div>

                    <div className="cake-flavour-container">
                        <h1>Cake Flavour :</h1>
                        <div className="cake-flavour">
                            <label htmlFor = "velvet">Velvet</label>
                            <input type="radio" name="flavour" id="velvet" value= "velvet" onChange={handleClick}/>
                        </div>
                        <div className="cake-flavour">
                            <label htmlFor = "chocolate">Chocolate</label>
                            <input type="radio" name="flavour" id="chocolate" value = "chocolate" onChange={handleClick}/>
                        </div>    
                    </div>
                    
                    <label htmlFor="cake-message"> Cake Message :
                        <textarea
                        id="cake-message"
                        rows="1"       
                        ref={textareaRef}
                        name="message"
                        value={orderInfo.message}
                        onChange={handleInputChange}
                        placeholder="What message would you like on the cake?"
                        >      
                        </textarea>
                    </label>

                    <label htmlFor="user-cake-details"> Cake Details(optional) :
                    <textarea
                        id="user-cake-details"
                        rows="1"       
                        ref={textareaRef}
                        name="note"
                        value={orderInfo.note}
                        onChange={handleInputChange}
                        placeholder="Is there anything you would like for us to know?"
                        >      
                        </textarea>
                    </label>
                    <div className="counter"> 
                        <button onClick={decreaseBtn}>-</button> <h1>{quantity}</h1> <button onClick={increaseBtn}>+</button>
                    </div>
                    {/* <button id="cartBtn" onClick={addToCartBtn}>Add to cart</button> */}
                    <button id="cartBtn" onClick={toCartBtn}>Add to cart</button>
                    <button id="wishlistBtn" onClick={(e) => e.preventDefault()}>Add to wishlist</button>
                </form>
            </div>
            {addedToCart && <div className="cart-modal-container">
                <div className="cart-modal">
                    <img src="../images/mark.png" alt="check-mark" /> <p>"{cakeDetails.cakeName}"</p>
                    <div className="cart-model-buttons">
                        <button>View cart</button><button onClick={(e)=> {setAddedToCart(addedToCart => !addedToCart)}}>Continue shopping</button>
                    </div>
                </div>
            </div>}
        </main>
    )
}