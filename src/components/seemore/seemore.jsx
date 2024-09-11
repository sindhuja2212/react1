import { Component } from "react";

import Button from "react-bootstrap/esm/Button";
import CustomList from "./customlist";

class SeeMore extends Component {
  state = {
    recipes: [],
    loader: true,
    error: false,
    flag: null, 
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/recipes");
      const { recipes } = await data.json();
      this.setState({
        recipes: recipes,
        loader: false,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        error: true,
      });
    }
  };

  toggleDetails = (recipeId) => {
    this.setState((prevState) => ({
      flag: prevState.flag === recipeId ? null : recipeId,
    }));
  };

  render() {
    return (
      <>
        <h1> recipes read more and read less options inside the cards</h1>
        {this.state.loader ? (
       
          <h1>hi</h1>
        ) : (
          <>
            <h2>Recipe....</h2>
            <div>
              <div >
                {this.state.recipes.map((each) => {
                  const isSelected = this.state.flag === each.id;
                  return (
                    <div key={each.id} className="col-sm-4 m-3 border" style={{ width: "100", padding: "2px" }}>
                      <img src={each.image} style={{ width: "200", height:"200"}} />
                      <h3>{each.name}</h3>
                      <p>{each.rating}</p>
                      <p>{each.reviewCount}</p>
                      
                      {isSelected && (
                        <span>
                          <h3>Recipe Ingredients:</h3>
                          <CustomList list={each.ingredients} />
                          <h3>Recipe Instructions:</h3>
                          <CustomList list={each.instructions} />
                        </span>
                      )}
                      <Button variant="primary" onClick={() => this.toggleDetails(each.id)}>
                        {isSelected ? "Hide Details" : "Show Details"}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default SeeMore;