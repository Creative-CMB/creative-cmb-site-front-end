import React, { Component } from "react";
import EventSideNav from "./EventSideNav";
import EventNav from "./EventNav";
import EventCreateChart from "./EventCreateChart";
import EventSum from "./EventSum";
import EventList from "./EventList";
import EventAddItem from "./EventAddItems";
import EventSchUpload from "../ComponentsAkila/EventSchUpload";
import EventSentEmail from "./EventSentEmail";
import EventAddDetails from './EventAdDetails';
import EventFooter from './EventFooter';
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import EventMobileNav from './EventMobileNav';
import axios from 'axios';

const { Dragger } = Upload;

class EventCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      items: [],
      email: "",
    };
  }

  componentWillMount() {
    this.getChartData();
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

  submitEmail = (email) => {
    this.setState({ email: email });
    console.log(this.state.email);
  };

  OnSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://my-json-server.typicode.com/akilaliyanage/json-fake-api-server/event",
        JSON.stringify(this.state.data)
      )
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));
  }

  render() {
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
                        name=""
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
                        name=""
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
                        name=""
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
                      <select name="cars" id="cars">
                        <option value="volvo">Select Type</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
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
                        name=""
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
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-2">
                      <p>DATE</p>
                    </div>
                    <div className="col-lg-10">
                      <input type="date" name="" id="" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-2">
                      <p>TIME</p>
                    </div>
                    <div className="col-lg-10">
                      <input type="time" name="" id="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="light-sub-topic">
              <p>EQUIPMENTS NEEDED FOR THE EVENT</p>
            </div>

            <div className="event-card form-card">
              <EventAddItem addItem={this.addItem} />
              <EventList items={this.state.items} dlt={this.dltItem} />
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
              <EventAddDetails />
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

export default EventCreate;
