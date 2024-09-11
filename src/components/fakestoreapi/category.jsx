import { Component } from "react";
import axios from "axios";



class FetchProducts extends Component{

    state={
        products:[],
        Categories:[]
    }
   
    componentDidMount(){
        this.fetchProducts()
        this.fetchCategories()
    

    }
    fetchProducts=async()=>{
        const {data,status}=await axios.get("https://fakestoreapi.com/products")
        console.log(data)
        
        if(status===200){
            this.setState({
                products:data
            })
        }
    }
    fetchCategories=async()=>{
        const {data,status}=await axios.get("https://fakestoreapi.com/products/categories")
        console.log(data)
        if(status===200){
            this.setState({
            Categories:[...data,"all"]
            })
        }
    }

    CategoriesHandler=(selectedData)=>{
        if(selectedData=="all"){
            this.fetchProducts()
        }
        else{
            this.fetchCatpro(selectedData)
        }
    }

    fetchCatpro=async(selected)=>{
        const{data,status}=await axios.get(`https://fakestoreapi.com/products/category/${selected}`)
        if(status===200){
            this.setState({
               products:data
            })
        }
    }


    render(){
        return(
        <>
        
        {
            this.state.Categories.length>0 && <>
            {
                this.state.Categories.map(each=>{
                    return(
                        <>
                        <button onClick={()=>this.CategoriesHandler(each)} >
  {each}
</button>
                        </>
                    )
                })
            }
            </>
        }
       {
        this.state.products.length>0 && <>
        {
           this.state.products.map(eachPro=>{
              return(
                <>
                <h3>{eachPro.title}</h3>
                <h2>{eachPro.category}</h2>
                <img src={eachPro.image} height={200} width={200}/>
                <h3>{eachPro.description}</h3>
                </>
              )
           }) 
        }
       
    
        </>
    }
    </>
        )
    }
}

export default FetchProducts