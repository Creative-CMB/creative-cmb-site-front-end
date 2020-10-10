import React, { Component } from "react";
import EventSideNav from "./EventSideNav";
import EventNav from "./EventNav";
import EventCreateChart from "./EventCreateChart";
import EventSum from "./EventSum";
import EventList from "./EventList";
import EventAddItem from "./EventAddItems";
import EventSchUpload from "../ComponentsAkila/EventSchUpload";
import EventSentEmail from "./EventSentEmail";
import EventAddDetails from "./EventAdDetails";
import EventFooter from "./EventFooter";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import EventMobileNav from './EventMobileNav';
import axios from 'axios';
import cryptoRandomString from "crypto-random-string";
import EventSuccess from './EventSuccess'
import { Button, Space } from "antd";
import jsPDF from "jspdf"
import "jspdf-autotable"
import { format } from "date-fns"

const { Dragger } = Upload;

class EventCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_id: cryptoRandomString({ length: 7 }),
      data: {},
      items: [],
      email: "",
      eqs: [],
      eventName: "",
      creatorName: "",
      creatorPhone: "",
      eventType: "",
      location: "",
      des: "",
      eventDate: "",
      eventTime: "",
      budget: "",
      headCount: "",
      occType: "",
      headder: "",
    };
  }

  componentWillMount() {
    this.getChartData();
  }
  componentDidMount(){
      document.title = "CreateCMB | Create new Event";
  }

  getChartData() {
    this.setState({
      data: {
        //labels: ["Complete", "Not complete"],
        datasets: [
          {
            label: "complete",
            data: [60, 40],
            backgroundColor: ["#0f4c75", "#3282b8"],
          },
        ],
      },
    });
  }

  //this will dlt the item in the entry
  dltItem = (id) => {
    this.setState({
      items: [...this.state.items.filter((item) => item.id != id)],
    });
  };

  addItem = (item) => {
    //console.log(item);
    const newItem = {
      id: Math.random(),
      itemName: item.itemName,
      count: item.count,
    };
    this.setState({ items: [...this.state.items, newItem] });
    console.log(this.state.items);
  };

  textdata = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitEmail = (email) => {
    this.setState({ email: email });
    console.log(this.state.email);
  };

  //validate the phone number
  validatePhone = () => {
    let phoneNum = this.state.creatorPhone;
    if (isNaN(phoneNum)) {
      message.error(
        "oopz!!! " +
          phoneNum +
          " is not recognized as a valid phone number. Please check the input and try again"
      );
    } else if (phoneNum.length != 10) {
      message.error(
        "oopz!!! the enterd phone number is not recognized as a valid mobile number. The number of digits should be 10"
      );
    }
  };

  //validate additional details
  validateAddDet = () => {
    let budget = this.state.budget;
    let headCount = this.state.headCount;
    

    if (isNaN(budget)) {
      message.error("oopz!!! the budget should be a numeric value");
    } else if (isNaN(headCount)) {
      message.error("oopz!!! the head count should be a numeric value");
    }
  };

  //function to create a PDF file whick contains the newly created data
  //this function will get the newly created data and will create a pdf

  generatePDF = (eventdata) => {
    //initilize the pds
    const doc = new jsPDF();

    //column definition
    const tableColumns = ["Event Id", "User ID", "Event name", "Budget", "Time of the event", "Location", "Date", "Head Count", "Creator Name"];
    const tableRows = [];

    const rowdata = [
      eventdata.event_id,
      eventdata.user_id,
      eventdata.event_name,
      eventdata.budget,
      eventdata.time,
      eventdata.location,
      eventdata.date,
      eventdata.head_count,
      eventdata.event_creator_name
    ];

    tableRows.push(rowdata);

    doc.autoTable(tableColumns, tableRows, { startY: 20 });
    const date = Date().split(" ");
    //the filename will be the current systems date
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    doc.text(eventdata.event_creator_name + "'s " + eventdata.event_name + "           - note that this is an auto generated file.", 14, 15);
    doc.save(`report_${dateStr}.pdf`);

  }

 
  OnSubmit = (e) => {
    e.preventDefault();

    //sending final data
    const data = {
      event_id: "EVT" + this.state.event_id,
      user_id: "USR1rgdj67",
      event_name: this.state.eventName,
      budget: this.state.budget,
      email_address: this.state.email,
      occassion_type: this.state.occType,
      time: this.state.eventTime,
      head_count: this.state.headCount,
      creator_phone: this.state.creatorPhone,
      schedule_file: "kjacbjdcbdjcb",
      date: this.state.eventDate,
      event_type: this.state.eventType,
      location: this.state.location,
      description: this.state.des,
      event_creator_name: this.state.creatorName,
    };

    this.generatePDF(data);

    console.log(data);

    fetch("http://127.0.0.1:8000/create-event/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // alert(response.status)
        this.setState({ headder: response.status });
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    if (this.state.headder == "200") {
      return <EventSuccess id={this.state.event_id} />;
    } else {
      return (
        <div className="row">
          <div className="col-lg-1.5 side">
            <EventSideNav />
          </div>

          <div className="col main slide" id="style-6">
            <EventNav />

            <div className="sub-topic">
              <p>CREATE AN EVENT</p>
            </div>

            <form className="event-form" onSubmit={this.OnSubmit.bind(this)}>
              <div className="light-sub-topic">
                <p>Basic Details</p>
              </div>

              <div className="event-card form-card">
                <div className="row main-row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 right-side">
                    <div className="row">
                      <div className="col-lg-3">
                        <p>EVENT NAME</p>
                      </div>
                      <div className="col-lg-9">
                        <input
                          type="text"
                          onChange={this.textdata}
                          name="eventName"
                          id=""
                          placeholder="Like : My Birthday Party"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-5">
                        <p>EVENT CREATOR NAME</p>
                      </div>
                      <div className="col-lg-7">
                        <input
                          type="text"
                          name="creatorName"
                          onChange={this.textdata}
                          id=""
                          placeholder="Like : John Doe"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-5">
                        <p>EVENT CREATOR PHONE</p>
                      </div>
                      <div className="col-lg-7">
                        <input
                          type="text"
                          name="creatorPhone"
                          onBlur={this.validatePhone}
                          onChange={this.textdata}
                          id=""
                          placeholder=" Like : +94 XX XXXX XXX"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3">
                        <p>EVENT TYPE</p>
                      </div>
                      <div className="col-lg-9">
                        <select
                          name="eventType"
                          id="cars"
                          onChange={this.textdata}
                        >
                          <option value="select type">Select Type</option>
                          <option value="wedding">Wedding</option>
                          <option value="election campaign">
                            Election Campaign
                          </option>
                          <option value="seminar">Seminar</option>
                          <option value="out-door campaign">
                            Out-door Campaigns
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3">
                        <p>LOCATION</p>
                      </div>
                      <div className="col-lg-9">
                        <input
                          type="text"
                          name="location"
                          onChange={this.textdata}
                          id=""
                          placeholder="Resident name, street name, town"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left-side">
                    <div className="row">
                      <div className="col-lg-3">
                        <p>DESCRIPTION</p>
                      </div>
                      <div className="col-lg-9">
                        <textarea
                          onChange={this.textdata}
                          name="des"
                          id=""
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-2">
                        <p>DATE</p>
                      </div>
                      <div className="col-lg-10">
                        <input
                          onChange={this.textdata}
                          type="date"
                          name="eventDate"
                          id=""
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-2">
                        <p>TIME</p>
                      </div>
                      <div className="col-lg-10">
                        <input
                          eventDate
                          type="time"
                          name="eventTime"
                          onChange={this.textdata}
                          id=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row upload-email">
                <div className="col-lg-6">
                  <EventSchUpload />
                </div>
                <div className="col-lg-6">
                  <EventSentEmail submitEmail={this.submitEmail} />
                </div>
              </div>

              <div>
                <div>
                  <div className="light-sub-topic">
                    <p>ADDITIONAL DETAILS</p>
                  </div>
                  <div className="event-card form-card adddet">
                    <form action="" style={{ height: "auto" }}>
                      <div
                        style={{ height: "50px", paddingLeft: 0 }}
                        className="row item"
                      >
                        <div className="col-lg-1">
                          <p>BUDGET</p>
                        </div>
                        <div className="col-lg-11">
                          <input
                            type="text"
                            onChange={this.textdata}
                            onBlur={this.validateAddDet}
                            name="budget"
                            style={{
                              width: "100%",
                              backgroundColor: "#eceef9",
                              border: "none",
                              outline: "none",
                              padding: "2px",
                              borderRadius: "10px",
                              paddingLeft: "15px",
                              textAlign: "center",
                            }}
                          />
                        </div>
                      </div>

                      <div
                        style={{ height: "50px", paddingLeft: 0 }}
                        className="row item"
                      >
                        <div className="col-lg-2">
                          <p>APPROX. HEAD COUNT</p>
                        </div>
                        <div className="col-lg-10">
                          <input
                            type="text"
                            onChange={this.textdata}
                            onBlur={this.validateAddDet}
                            name="headCount"
                            style={{
                              width: "100%",
                              backgroundColor: "#eceef9",
                              border: "none",
                              outline: "none",
                              padding: "2px",
                              borderRadius: "10px",
                              paddingLeft: "15px",
                              textAlign: "center",
                            }}
                          />
                        </div>
                      </div>

                      <div
                        style={{ height: "50px", paddingLeft: 0 }}
                        className="row item"
                      >
                        <div className="col-lg-3">
                          <p>OCCATION TYPE (DAY/NIGHT)</p>
                        </div>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            onChange={this.textdata}
                            name="occType"
                            style={{
                              width: "100%",
                              backgroundColor: "#eceef9",
                              border: "none",
                              outline: "none",
                              padding: "2px",
                              borderRadius: "10px",
                              paddingLeft: "15px",
                              textAlign: "center",
                            }}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <input
                    type="submit"
                    value="SAVE EVENT"
                    className="btn btn-primary save-event"
                  />
                </div>
              </div>
            </form>

            <EventFooter />
          </div>

          <div className="col-lg-2 fix-right">
            <EventCreateChart data={this.state.data} />

            <EventSum />
          </div>
        </div>
      );
    }
  }
}

export default EventCreate;
