import React, { Component } from "react";

const cryptoRandomString = require("crypto-random-string");

class ResForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //rid: cryptoRandomString({ length: 7 }),
      tktname: "",
      eventName: "EVT39PEjsh",
      cusname: "",
      resdate: "",
      status: "test",
      test:'',
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

  submitResData = () => {
    const resTickDetails = {
      reservation_id: "RES" + cryptoRandomString({ length: 7 }),
      batch_ticket_id: this.props.bticketID,
      event_id: "EVT39PEjsh",
      cus_id: this.state.cusname,
      date: this.state.resdate,
      status: "test",
     
  }

  var url = 'http://127.0.0.1:8000/create-res/'
  fetch(url, {
      method:'POST',
      headers:{
      'Content-type': 'application/json',
      },
      body:JSON.stringify(resTickDetails)
  }).then(response => response.json())

  console.log('reservation created', resTickDetails)
  }

  render() {
    
    return (
      <div>
        {/* <h3> {this.props.tName} </h3> */}

        <div className="res-container" style={{marginTop:"10px",background:"linear-gradient(to bottom, #99ccff 0%, #ff99cc 100%)"}}>
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
                  value={this.props.tName}
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
           {/*  <div className="row">
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
            </div> */}
            <div className="row" style={{margonTop:"20px",marginLeft:"600px"}}>
            <button type="submit" style={{backgroundColor:"#3b558e" , borderRadius:"10px", color:"white", textDecoration:"none", padding:"8px 15px",border:"none"}}>
               
               Confirm
             
     
            </button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default ResForm;
