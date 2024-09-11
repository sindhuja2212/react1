import { Component } from "react";
import FetchHandler from "../fetch";
import Counter from "../counter";

class YouTube extends Component{

    state={
        isSubscribe:false,
        text1:"Subscribe",
        text2:"Subscribed"
    }




    btnHandler=()=>{

        this.setState({
            isSubscribe:!this.state.isSubscribe
        })
    
    }


    render(){
        return(
            <>
            <button onClick={this.btnHandler}>{this.state.isSubscribe?this.state.text1:this.state.text2}</button>{
                this.state.isSubscribe?<div><Counter/></div>:<div>PLZ subscribe to access the content</div>
            }
            </>
        )
    }




}
export default YouTube