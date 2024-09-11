import React from "react"
import { useState,useEffect } from "react"

let UserDetails="https://jsonplaceholder.typicode.com/posts"

console.log("iam link ",UserDetails)

const FetchHandler=()=>{

const [user,setUser]=useState([])

const userHandler=async()=>{
    const response=await fetch(UserDetails)
    const newData =await response.json()
    setUser(newData)
}

useEffect(()=>{
 
    console.log(userHandler())
},[])

    return(
     <>
     {
        user.map((each)=>{
            return(
                <>
                <div style={{color:"red"}}>
                  title:{each.title}
                    <br/>
                </div>
                <h3 style={{color:"blue"}}>{each.body}</h3>

                </>
            )
        })
     }
      
     </>
    )

}
export default FetchHandler