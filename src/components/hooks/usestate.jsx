import { useState } from "react"

const CounterHook =()=>{
      const[age,setAge]=useState(1)

const ageHandler=(type)=>{
    switch(type){
        case "increment":
            setAge(age+1)
            break;
        case "decrement":
            if(age>=0){
                setAge(age-1)
            }
            else{
                alert("age must be positive")
            }
            break;
        case "reset":
            setAge(0)
            break;
        default:
            break

    }
}  


    return(
        <>
        <h2>counter age {age}</h2>
        <button onClick={()=>{ageHandler("increment")}}>increment age</button>
        <button onClick={()=>{ageHandler("decrement")}}>decrement</button>
        <button onClick={()=>{ageHandler("reset")}}>reset</button>



        </>
    )
}
export default CounterHook