import axios from "axios";
import { Component } from "react";
import CustomRectCard from "../rectanglecard/customcard";


class FakeStoreCategories extends Component {
  state = {
    Categories: [],
    products: [],
    loader: true,
  };
  componentDidMount() {
    this.fetchCategories();
    this.fetchProducts();
  }

  fetchCategories = async () => {
    const { status, data } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    this.setState({
      Categories: [...data, "all"],
    });
  };

  fetchCategoriesHandler = (selectedCategory) => {
    if (selectedCategory === "all") {
      this.fetchProducts();
    } else {
      this.fetchCategoryProducts(selectedCategory);
    }
  };

  fetchCategoryProducts = async (categoryName) => {
    const { status, data } = await axios.get(
      `https:fakestoreapi.com/products/category/${categoryName}`
    );
    if (status == 200) {
      this.setState({
        products: data,
      });
    }
  };

  fetchProducts = async () => {
    const { status, data } = await axios.get(
      "https://fakestoreapi.com/products"
    );
    if (status == 200) {
      this.setState({
        products: data,
        loader: false,
      });
    }
  };
  render() {
    return (
      <>
        {this.state.Categories.length > 0 && (
          <>
            {this.state.Categories.map((each, index) => {
              return (
                <div key={index} style={{ display: "inline-block" }}>
                  <button
                    onClick={() => {
                      this.fetchCategoriesHandler(each);
                    }}
                    className="bg-primary hover:bg-blue-700 text-dark font-bold py-2 px-4 rounded m-2"
                  >
                    {each}
                  </button>
                </div>
              );
            })}
          </>
        )}

        {this.state.loader ? (
           <h5>loading....</h5>
        ) : (
          <div className="container-fluid  text-center">
            <div className="d-flex flex-row justify-content-center flex-wrap">
              {this.state.products.map((each) => {
                return (
                  <div key={each.id} className="col-sm-4 m-3">
                    <CustomRectCard
                      source={each.image}
                      title={each.title}
                      text={each.category}
                      buttonText={`Price: $${each.price}`}
                      
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}
export default FakeStoreCategories;