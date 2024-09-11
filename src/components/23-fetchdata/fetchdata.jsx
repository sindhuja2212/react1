import { Component } from "react";
import Loader from "./loading";




class RecipeList extends Component{

   state={
    recipes:[],
    loading:true,
    error:false


   }

    componentDidMount(){
        this.fetchData()

    }

    fetchData=async()=>{
        const data = await fetch("https://dummyjson.com/recipes")
        const {recipes}=await data.json()
      

        this.setState({
            recipes:recipes,
            loading:false
        })
    }

    render(){
        return(

        <>
        <h1>recipeList</h1>{
          this.state.loading?<Loader/>:<><h2>recipes.....</h2>
          {
            this.state.recipes.map(eachRecipe=>{
                return(
                    <div>
                        <h3>{eachRecipe.name}</h3>
                        <img src={eachRecipe.image} width={250} height={300}/>
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
export default RecipeList