import { useState } from "react"


const From=()=>{
 const[data,setUsername]=useState("")

 const[newData,setNewData]=useState("")

const getUsername=(event)=>{
     setUsername(event.target.value)
}

const userDetails=(e)=>{
    e.preventDefault()
     setNewData(data)

}



    return(
        <>
        <h2>hello{newData}</h2>
        <form onSubmit={userDetails}>
            <input type="text"  placeholder="enter a name" onChange={getUsername}/>
            <br/>
            <button type="submit">submit</button>
        </form>
        
        </>
    )
}
export default From