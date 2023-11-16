import React from "react";
export default function ScrollBox({cakeData}){
    return(
        <div className="scrollbox">
            <img src= {cakeData.image}/>
            <div className="scrollbox-details">
                <h1>{cakeData.cakeName}</h1>
                <h2>#{cakeData.rangeLow.toLocaleString()} - #{cakeData.rangeHigh.toLocaleString()}</h2>
            </div>
        </div>
    )
}