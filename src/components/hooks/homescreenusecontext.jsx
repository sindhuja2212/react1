import React, { useContext } from 'react'
import { UserDetails } from './usecontext-stack'
import "./routing.css"

const HomeScreen = () => {
  const {username,counterHandler, resetCounter, decrementCounter}=useContext(UserDetails)
  return (
    <div>
      <h3>Hello {username}</h3>
      <button onClick={counterHandler}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </div> 
  )
}

export default HomeScreen