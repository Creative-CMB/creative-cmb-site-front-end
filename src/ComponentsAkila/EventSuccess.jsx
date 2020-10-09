import React, { Component } from "react";
import { Result, Button } from "antd";
import EventNav from "./EventNav";
import { Link } from "react-router-dom";

class EventSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      para:'',
    };
  }

  componentDidMount() {
    this.setId();
  }

  setId = () => {
    this.setState({ id: this.props.id })
    const para = "Event Identification number is : EVT" + this.state.id + "Cloud server configuration takes 1-5 minutes, please wait.";
    this.setState({ para: para });
  }

  render() {
   
    return (
      <div>
        <EventNav />
        <Result
          style={{ marginTop: "50px" }}
          status="success"
          title="Successfully Saved in the Server 👌👌"
          subTitle= {this.state.para}
          extra={[
            <Button type="primary" key="console"><Link to="/event">Go To Home</Link></Button>,
            <Button key="buy"><Link to="/create">Create another event</Link></Button>,
          ]}
        />
      </div>
    );
  }
}

export default EventSuccess;
