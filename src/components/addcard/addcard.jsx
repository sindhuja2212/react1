import { Component } from "react";

import Button from "react-bootstrap/Button";
import CustomRectCard from "../rectanglecard/customcard";

class AddCard extends Component {
  state = {
    empData: [
      { name: "sindhuja", role: "Web Dev", salary: 20000 },
      { name: "mounika", role: "React Dev", salary: 20000 },
    ],
  };

  clickHandler = () => {
    //need to add card
    const addingData = { name: "manasa", role: "Web Dev", salary: "20000" };

    const newData = [...this.state.empData, addingData];

    this.setState({
      empData: newData,
    });
  };

  removeHandler = (index) => {
    //deleting based on index
    console.log(index);
    const OverAllData = this.state.empData.filter((_, id) => id !== index);
    this.setState({
      empData: OverAllData,
    });
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.clickHandler}>
          Add Card
        </Button>
        <div className="container mt-5">
          <div className="row">
            {this.state.empData.length > 0 ? (
              this.state.empData.map((eachEmpData, index) => {
                return (
                  <div className="col-sm-4">
                    <CustomRectCard
                      title={eachEmpData.name}
                      ind={index}
                      text={eachEmpData.role}
                      removeHandler={this.removeHandler}
                    />
                  </div>
                );
              })
            ) : (
              <h3>No Data Found</h3>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default AddCard;
