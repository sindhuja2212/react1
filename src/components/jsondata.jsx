import React from 'react'
import { userData } from './data'
console.log(userData)

function Jsondata() {
  return (
 <>{userData.map((each)=>{
    return(
        <div style={{border:"1px solid black"}}>
        <div>{each.id}</div>
        <div>name: {each.name}</div>
        <div>email: {each.email}</div>
        <div>address: {each.address.street}</div>
        </div>
    )
 })

 }

 </>
  )
}

export default Jsondata