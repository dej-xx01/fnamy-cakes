import React from "react";
import objTemplate from "./obj-template"
export default function ObjBox(){
    const mappedObjTemplate = objTemplate.map(item =>{
        return  <div className="obj-box">
                    <img src= {item.icon} alt="obj-icon" />
                    <div className="obj-box-details">
                        <h1>{item.header}</h1>
                        <p>{item.text}</p>
                    </div>
                </div>
      })
    return(
       <> {mappedObjTemplate}</>
    )
}