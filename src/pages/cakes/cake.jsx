import React from "react";
import cakeInfo from "../../utility/cakeInfo";
import { useParams } from "react-router-dom";
import Order from "./order";
export default function Cake(){
    const {id} = useParams()
    console.log(id)
    return(
        <>
            <header>
                <h1>Your pick</h1>
            </header>
            {cakeInfo.map((cake, index) =>{
                if (cake.cakeName == id){
                    return <Order cakeDetails = {cake} key={index} id = {index}/>
                }
            })}
        </>
    )
}