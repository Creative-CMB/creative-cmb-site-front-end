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
import EventMobileNav from "./EventMobileNav";
import EventSlider from './EventSlider';
import EventEditCard from './EventEditCard';
import EventEditTable from "./EventEditTable";

const { Dragger } = Upload;

class EventCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      items: [],
      email: "",
      myEvents:[],
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  componentDidMount() {
    this.fetchEditCardData();
  }

  fetchEditCardData = () => {
    fetch(
      "http://127.0.0.1:8000/events/"
    ).then(response => response.json()).then(data => this.setState({myEvents:data}));
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

  render() {
    return (
      <div className="row">
        <div className="col-lg-1.5 side">
          <EventSideNav />
        </div>

        <div className="col main slide" id="style-6">
          <EventNav />

          <EventSlider />

          <EventEditTable/>

          <EventFooter />
        </div>

        <div className="col-lg-2 fix-right">
          <EventSum />
        </div>
      </div>
    );
  }
}

export default EventCreate;
