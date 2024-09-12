import { Link, Route, Routes } from "react-router-dom"
import { createContext, useState } from "react"
import HomeScreen from "./homescreenusecontext"

import { GlobalCounter } from "./usecontextglobal"
import "./routing.css"

export const UserDetails =createContext()


export const CustomStack=()=>{
    const [username,setUsername]=useState('Sindhu')
    const [counter,setCounter]=useState(0)
    const [theme,setTheme]=useState(true)

    const counterHandler=()=>{
        setCounter(counter+1)
    }
    const themeHandler=()=>{
        setTheme(!theme)
    }

    const resetCounter=()=>{
        setCounter(0)
    }

    const decrementCounter=()=>{
        setCounter(counter-1)
    }
    return (
       <UserDetails.Provider value={{
        username,
        counter,
        darkTheme:theme,
        counterHandler,
        themeHandler,
        resetCounter,
        decrementCounter
       }

       }>

           <nav>
          <span> <Link to="counter">Global counter</Link> </span>
          <span> <Link to="/">Home</Link></span>
           </nav>

            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="counter" element={<GlobalCounter/>}/>

            </Routes>
       </UserDetails.Provider>
    )
}