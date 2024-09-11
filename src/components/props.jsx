import React from "react";
import { useState,useEffect} from "react"




const City=()=>{
    const[data,setState]= useState("10");

    useEffect(()=>{
        if(data==="20"){
            setState("hyderabd")
           }
           else{
            setState("delhi")
           }

    },[data])
  
    return(
        <div>
        <h1> i am from {data}</h1>
        </div>
    )
}
export default City