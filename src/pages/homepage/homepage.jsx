import React, { useEffect, useState } from "react";
import ObjBox from "./obj-box";
import ScrollBox from "./scroll-box";
import cakeInfo from "../../utility/cakeInfo";
import testimonials from "../../utility/testimonials";
import slideTemplate from "../../utility/slide-template";
export default function HomePage(){

    const [heroImage, setHeroImage] = useState([slideTemplate[0].image])
    // const [current, setCurrent] = useState(0)
    // useEffect(()=>{
    //     setInterval(()=>{   
    //        setCurrent(current => current < slideTemplate.length && current + 1) 
    //        setHeroImage(heroImage =>{
    //             return slideTemplate[current].image
    //         })
    //         console.log(current)
    //     }, 5000)
    // }, [current])



    const filteredTestimonials = testimonials.filter(item => item.id <= 3)
    return(
        <main>
            <section>
                <div className="hero-image"><img src= {heroImage} alt="hero-image"/></div>             
            </section>
            <section>
                <ObjBox/>
            </section>
            <section>
                <h1>OUR POPULAR PRODUCTS</h1>
                <div className="slidescroll-container">
                    {cakeInfo.map(data => <ScrollBox cakeData = {data}/>)}
                </div>
                <button className="see-more">See more</button>
            </section>
            <section>
                <h1>ABOUT US</h1>
                <p>FnamyCakes is your number one cake shop in Lagos, Nigeria. In all our shops, we stock ready for pick-up and made-to-order sumptuous, freshly baked cakes. </p>
                <p> Our cakes come in a variety of flavours like chocolate, strawberry, butterscotch, coconut, banana, Irish cream, etc. You also have the choice of various shapes, colors, sizes, characters, and creative designs. </p>
                <p> Our unique tastes, designs, and value for money offerings stand us out from the pack and make our numerous private and corporate customers across Nigeria keep coming back to us. </p>
                <p>We are open Mondays through Saturdays from 8am to 6pm, and on Sundays from 9am-3pm.</p>
                <img src="./images/cake9.png" alt="show-glass" />
            </section>
            <section id="reviews">
                <h1>TESTIMONIALS</h1>
                <div className="testimony-container">
                    {filteredTestimonials.map(data =>{
                        return <div className="customer-testimony">
                            <div className="customer-details">
                                <img src= {data.image} alt="customer-img" />
                                <h1>{data.customer}</h1>
                            </div>
                            <p>{data.text}</p>
                        </div>
                    })}
                </div>
                <div className="button-container"><button className="see-more two">See more</button></div>
            </section>
        </main>
    )
}