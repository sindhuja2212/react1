import axios from "axios";
import { Component } from "react";

export class Weather extends Component{
    state={
        data:[]
    }
    componentDidMount(){
this.getLocation()
    }
    getLocation=()=>{
navigator.geolocation.getCurrentPosition(
    (position)=>{
       const{latitude,longitude}=position.coords
        if(latitude&&longitude){
            
            this.fetch(latitude,longitude)
        }
    }
)

    }
    fetch=async (lat,log)=>{
const newData=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=3d96b76bd18d71a187462ececa7bfe11`)

this.setState({
data:newData.data
})

    }
    render(){
const {name,main}=this.state.data
console.log(this.state.data)

        return(
            <>
       {name && main? (
          <>
            <h1>Name: {name}</h1>
            <h1>humidity: {main.humidity}</h1>
            <h1>pressure:{main.pressure}</h1>
            <h1>temp:{main.temp}</h1>
          </>
        ) : (
          <h1>Loading...</h1>
        )}    
          
            </>
        )
    }
}