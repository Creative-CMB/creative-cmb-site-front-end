import React, { Component } from "react";

const cryptoRandomString = require("crypto-random-string");

class ResForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rid: cryptoRandomString({ length: 7 }),
      tktname: "",
      eventName: "",
      cusname: "",
      resdate: "",
      status: "",
    };
  }

  enterData = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(
      this.state.rid,
      this.state.tktname,
      this.state.eventName,
      this.state.cusname,
      this.state.resdate,
      this.state.status
    );
  };

  render() {
    return (
      <div>
        <div className="res-container">
          <form className="formstyle" onSubmit={this.submitResData}>
            <div className="row">
              <div className="col-3">
                <label for="fname">Ticket Name:</label>
              </div>
              <div className="col-5">
                <input
                  onChange={this.enterData}
                  type="text"
                  id="tktname"
                  name="tktname"
                  placeholder="Ticket Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <label for="type">Event Name:</label>
              </div>
              <div className="col-5">
                <input
                  onChange={this.enterData}
                  type="text"
                  id="eventName"
                  name="eventName"
                  placeholder="Type"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <label for="type">Customer Name:</label>
              </div>
              <div className="col-5">
                <input
                  onChange={this.enterData}
                  type="text"
                  id="cusname"
                  name="cusname"
                  placeholder="Amali"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <label for="fname">Date:</label>
              </div>
              <div className="col-5">
                <input
                  onChange={this.enterData}
                  type="date"
                  id="resdate"
                  name="resdate"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <label for="fname">Status:</label>
              </div>
              <div className="col-5">
                <input
                  onChange={this.enterData}
                  type="text"
                  id="status"
                  name="status"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              <p
                style={{
                  color: "white",
                  fontFamily: "times new roman",
                  fontSize: "20px",
                }}
              >
                Confirm
              </p>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ResForm;
