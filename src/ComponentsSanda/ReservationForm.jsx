import React, { Component } from "react";
import "./cssSanda/Reservation.css";

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resid: "",
      date: "",
    };
  }
  enterData = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    console.log(this.state.resid, this.state.date);
  };

  render() {
    return (
      <div>
        <div className="navig">
          <nav>
            <h1 className="hello">HEllo</h1>
          </nav>
        </div>

        <form>
          Reservation ID:
          <input
            className="formRes"
            onChange={this.enterData}
            type="text"
            name="resid"
            id="resid"
          />
          <br></br>
          Date:
          <input type="text" onChange={this.enterData} name="date" id="date" />
        </form>
      </div>
    );
  }
}

export default ReservationForm;
