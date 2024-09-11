
import React from 'react'


let actors=[
    {
        name:"shannu",
        ndname:"deepthi",
        favname:"samantha"
    }
]

export default function Map() {
  return (
    <>
    {actors.map((each)=>{
        return(
            <div>
                <h2>my fav actor is {each.name}</h2>
                <h2>{each.ndname}</h2>
                <h2>{each.favname``}</h2>
            </div>
        )

    })}

    </>
    
  )
}
