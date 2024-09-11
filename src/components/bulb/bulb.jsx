import { Component } from "react";

class BulbCustom extends Component {
  state = {
    data: [],
  };

  onclickHandler = () => {
    const addData = {
      img1: "https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png",
      img2: "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940186lbyqngqg1y.png",
    };
    const updatedData = [...this.state.data, addData];
    this.setState({
      data: updatedData,
    });
  };
  removeCardHandler = (index) => {
    const filteredData = this.state.data.filter((_, id) => id !== index);
    this.setState({
      data: filteredData,
    });
  };
  bulbOn = (index) => {
    const newData = [...this.state.data];
    newData[index].t = !newData[index].t;
    this.setState({
      data: newData,
    });
  };

  render() {
    let count = 0;
    return (
      <>
        <button onClick={this.onclickHandler}>Add a Bulb</button>
        {this.state.data.map((each, index) => {
          if (each.t) {
            count += 1;
          }
          return (
            <div key={index}>
              <img
                src={
                  this.state.data[index].t
                    ? this.state.data[index]["img2"]
                    : this.state.data[index]["img1"]
                }
                onClick={() => {
                  this.bulbOn(index);
                }}
                alt="bulb Image"
                width="100px"
              />
              <button
                onClick={() => {
                  this.removeCardHandler(index);
                }}
              >
                Remove Bulb
              </button>
            </div>
          );
        })}
      
      </>
    );
  }
}
export default BulbCustom;