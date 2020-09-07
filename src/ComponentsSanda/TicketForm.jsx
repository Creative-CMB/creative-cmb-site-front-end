import React, { Component } from "react";
import "./cssSanda/Ticket.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'randomstring'
import imgp from "./img/6386.png";
import TktNavBar from "./TktNavBar";
import EventFooter from "../ComponentsAkila/EventFooter";
import axios from 'axios'

const cryptoRandomString = require('crypto-random-string')

class TicketForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tid: cryptoRandomString({length:7}),
      tname: "",
      type: "",
      price: "",
      radstatus: false,
      quant: "",
      event: "",
      events:[],
      admins:[]
    };
  }

  componentDidMount(){
    this.fetchEvents();
    this.fetchAdmins();
  }

  fetchEvents = () => {
      axios.get("http://127.0.0.1:8000/events/").then(res=>{
        const events = res.data;
        this.setState({events});
      })

      // fetch("http://127.0.0.1:8000/events/").then(response => response.json()).then(data => console.log(data))
  }

  fetchAdmins = () =>{
    axios.get("http://127.0.0.1:8000/admins/").then(res=>
      {
        const admins=res.data;
        this.setState({admins});
      }
    )
  }

  inputData = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    this.setState({ radstatus: !this.state.radstatus });

    console.log(
      this.state.tid,
      this.state.tname,
      this.state.type,
      this.state.price,
      this.state.quant
    );
    console.log(this.state.radstatus);
    console.log(this.state.event);
  };

  onCreateTicket = () => {
    console.log();
  };

  submitData = (e) =>{
    e.preventDefault();

    const tktData = {
      ticket_id : "TKT"+this.state.tid,
      event_id : this.state.event,
      admin_id : ""

    }
  }

  render() {
    return (
      <div>
        <TktNavBar
          link1="Home"
          link2="Event"
          link3="Seminar"
          link4="About Us"
        />
        <div
          style={{
            width: "100vh",
            background: "  linear-gradient(to top, #3399ff 14%, #49dcfc 80%)",
          }}
        >
          <div
            className="row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              marginLeft: "15px",
            }}
          >
            <h1 style={{ fontFamily: "sanseriff" }}>Create Ticket</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <div className="container">
              <form className="formstyle" onSubmit={this.submitData}>
                <div className="row">
                  <div className="col-3">
                    <label for="fname">Ticket Name:</label>
                  </div>
                  <div className="col-5">
                    <input
                      onChange={this.inputData}
                      type="text"
                      id="tname"
                      name="tname"
                      placeholder="Ticket Name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <label for="type">Ticket Type:</label>
                  </div>
                  <div className="col-5">
                    <input
                      onChange={this.inputData}
                      type="text"
                      id="type"
                      name="type"
                      placeholder="Type"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <label for="type">Ticket Price:</label>
                  </div>
                  <div className="col-5">
                    <input
                      onChange={this.inputData}
                      type="text"
                      id="price"
                      name="price"
                      placeholder="Rs.1000/="
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <label for="type">Ticket Status:</label>
                  </div>
                  <div className="col-5">
                    <label className="radioText">
                      Available:
                      <input
                        onChange={this.inputData}
                        type="radio"
                        id="radstatus"
                        name="radstatus"
                      />
                    </label>
                    <label className="radioText">
                      Not Available:
                      <input
                        onChange={this.inputData}
                        type="radio"
                        name="radstatus"
                        id="radstatus1"
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <label for="type">Ticket Quantity:</label>
                  </div>
                  <div className="col-5">
                    <input
                      onChange={this.inputData}
                      type="text"
                      id="quant"
                      name="quant"
                      placeholder="100"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-3">
                    <label for="event">Image:</label>
                  </div>
                  <div class="col-5">
                    <input
                      onChange={this.inputData}
                      type="file"
                      id="quant"
                      name="quant"
                      placeholder="100"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-3">
                    <label for="event">Event</label>
                  </div>
                  <div class="col-5">
                    <select onChange={this.inputData} id="event" name="event">
                      {this.state.events.map((ev) =>{
                        const evId = ev.event_id;

                        return(
                          <option value={ev.event_id}>{ev.event_id}</option>
                        );
                      })}
                    </select>
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
                  Create Ticket
                </p>
              </button>
              </form>
             
            </div>
          </div>

          <div
            className="col-lg-4 col-md-12 col-sm-12 col-xs-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={imgp} alt="Third slide" style={{ width: "80%" }} />
          </div>
        </div>
        <EventFooter />
      </div>
    );
  }
}

export default TicketForm;
