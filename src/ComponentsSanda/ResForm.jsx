import React, { Component } from "react";

class ResForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rid: "",
      tktname: "",
      eventName: "",
      cusname: "",
      resdate: "",
    };
  }
  render() {
    return (
      <div>
        <div className="res-container">
          <form className="formstyle">
            <div className="row">
              <div className="col-3">
                <label for="fname">Reservation ID:</label>
              </div>
              <div className="col-5">
                <input
                  onChange={this.inputData}
                  type="text"
                  id="rid"
                  name="rid"
                  placeholder="tck001"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <label for="fname">Ticket Name:</label>
              </div>
              <div className="col-5">
                <input
                  onChange={this.inputData}
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
                  onChange={this.inputData}
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
                  onChange={this.inputData}
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
                  onChange={this.inputData}
                  type="text"
                  id="resdate"
                  name="resdate"
                  placeholder="12.05.2020"
                />
              </div>
            </div>
          </form>
          <button
            className="btn btn-primary"
            // onclick={this.onCreateTicket}
            style={{
              backgroundColor: "#6495ED",
              padding: "5px",
              width: "20%",
              height: "45px",
              marginLeft: "380px",
              borderRadius: "10px",
            }}
          >
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
        </div>
      </div>
    );
  }
}

export default ResForm;
