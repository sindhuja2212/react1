import axios from "axios";
import { Component } from "react";
import InstagramHeart from "../instagramheart/instagramheart";




class FakeStoreApi extends Component{
   
            state={
                products:[],
                loading:true,
                error:false
            }
        
    

    componentDidMount(){
        console.log("im clicked")
        this.fetchData()
    }

    fetchData=async()=>{
        const {status,data}=await axios.get("https://fakestoreapi.com/products")

        if(status===200){
            this.setState({
                products:data,
                loading:false
            })
        }
        
    }

    render(){
        return(
           
            <>
             <h3>Loading Products</h3>
            
            {
                this.state.loading ? <>loading...</> : 
                <>
                
                <h2>Products</h2>
                {
                    this.state.products.map(eachProd=>{
                        return(
                            <div style={{width:400,height:"auto",margin:10,borderColor:"black",border:2}}>
                                 <h1>{eachProd.id}</h1>
                                <h2>{eachProd.title}</h2>
                                <h2>{eachProd.category}</h2>
                                <img src={eachProd.image} height={200} width={150} alt={eachProd.title}/>
                                <h4>{eachProd.description}</h4>
                                <InstagramHeart/>
                               

                            </div>
                        )
                    })
                }

                </>
            }
             
            </>
        )

        
    }


}
export default FakeStoreApi