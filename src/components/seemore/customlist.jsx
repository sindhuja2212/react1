const CustomList=(prop)=>{
    const{list}=prop
    return(
        <ol>
        <>
        {
        list.map((eachValue,index)=>{
            return <li key={index} >{eachValue}</li>
        })
        }
            </>
        </ol>
    )
}

export default CustomList