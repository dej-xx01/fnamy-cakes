import React from "react";
import cakeInfo from "../../utility/cakeInfo";
import {Link} from "react-router-dom"
export default function BirthdayCakes(){
    return(
        <>
            <header>
                {/* <img src="../images/Rectangle 69.jpg" alt="rectangle 69" /> */}
                <h1>Cakes</h1>
            </header>
            <main>
                <div className="cakes-container">
                    {cakeInfo.map((cake,index) =>{
                        if (index > 4){
                            return  <Link to = {`${cake.cakeName}`}>
                                        <div className="cakebox">
                                            <img src= {cake.image}/>
                                            <div className="cakebox-details">
                                                <h1>{cake.cakeName}</h1>
                                                <h2>#{cake.rangeLow.toLocaleString()} - #{cake.rangeHigh.toLocaleString()}</h2>
                                            </div>
                                        </div>
                                    </Link>
                        }
                    })}
                </div>
            </main>
        </>
    )
}