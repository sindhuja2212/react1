import { Component } from "react";

class Counter extends Component{
     state={
        count:0
     }

     incrementHandler=()=>{
         this.setState({
            count:this.state.count+1
         })
     }

     decrementHandler=()=>{
        this.setState({
            count:this.state.count-1
        })
     }
     resetHandler=()=>{
        this.setState({
            count:this.state.count0
        })
     }





    render(){
        return(
            <>
            <h1>counter : </h1>
            <button onClick={incrementHandler}>increment</button>
            <button onClick={decrementHandler }>decrement</button>
            <button onClick={resetHandler}>reset</button>
            </>
        )
    }
}
export default Counter