import React from 'react'
import { useState } from 'react'


function  Counter() {
    const[count,setcount]=useState(0)

    const increment=()=>{
        setcount(count+1)

    }
    const decrement=()=>{
        if(count>0){
        setcount(count-1)
    }
    }
    const reset=()=>{
        setcount(0)
    }
  return (
    <>
    <h1>{count}</h1>
    <div>counter</div>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    </>
  )
}

export default Counter