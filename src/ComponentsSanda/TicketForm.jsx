import React, { Component } from "react";

class TicketForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tname: "",
      type: "",
      price: "",
      radstatus: false,
      quant: "",
    };
  }

  inputData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    this.setState({ radstatus: !this.state.radstatus });

    console.log(
      this.state.tname,
      this.state.type,
      this.state.price,
      this.state.radstatus,
      this.state.quant
    );
  };
  render() {
    return (
      <div>
        <form>
          Name:
          <input
            onChange={this.inputData}
            type="text"
            name="tname"
            id="tname"
          />
          <br></br>
          Type:
          <input onChange={this.inputData} type="text" name="type" id="type" />
          <br></br>
          Price:
          <input
            onChange={this.inputData}
            type="text"
            name="price"
            id="price"
          />
          <br></br>
          Status:
          <input
            onChange={this.inputData}
            type="radio"
            name="radstatus"
            id="radstatus"
          />
          <br></br>
          <input
            onChange={this.inputData}
            type="radio"
            name="radstatus"
            id="radstatus1"
          />
          <br></br>
          Ticket Quantity:
          <input
            onChange={this.inputData}
            type="text"
            name="quant"
            id="quant"
          />
          <br></br>
          Image:<input type="file"></input>
          <select><option>
              {this.state}
              </option></select>
        </form>
      </div>
    );
  }
}

export default TicketForm;
