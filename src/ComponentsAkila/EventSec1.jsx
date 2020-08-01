import React, { Component, useState } from "react";
import {
  Card,
  Row,
  Col,
  Form,
  Input,
  Affix,
  Select,
  Checkbox,
  DatePicker,
  TimePicker,
} from "antd";
import { red } from "@ant-design/colors";
import moment from "moment";

const { Option } = Select;
const { TextArea } = Input;

class EventSec1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventname: "",
      creatorname: "",
      creatorphone: "",
      type: [],
      location: "",
      description: "",
      date: "",
      time: "",
      delivery: false,
      eq: [],
      des: "",
      date: "",
      time:'',
    };
  }

  componentDidMount() {
    //fetch event types
    this.fetchEventTypes();
    this.fetchEq();
  }
  //fetch the event types
  fetchEventTypes = () => {
    //fetch the data
    fetch(
      "https://my-json-server.typicode.com/akilaliyanage/json-fake-api-server/types"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ type: data });
      });
    //demo data
    const types = this.state.type;
    const loop = types.map((itm) => {
      return (
        <Option key={itm.id} value={itm.title}>
          {itm.title}
        </Option>
      );
    });
    return loop;
  };

  //fetch the equipments
  fetchEq = () => {
    //fetch the data
    fetch(
      "https://my-json-server.typicode.com/akilaliyanage/json-fake-api-server/equipmets"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ eq: data }));

    const eqs = this.state.eq;
    const loop = eqs.map((eq) => {
      return (
        <Option key={eq.id} value={eq.title}>
          {eq.title}
        </Option>
      );
    });

    return loop;
  };

  handleInput = (e) => {
    //const evntObj = e.target;
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    //const [stateval] = this.state.data;

    //this.props.progress(this.state.progress);
  };

  checkInput = () => {
    this.setState({ progress: this.state.progress + 12.5 });
    console.log(this.state.progress);
    //this.props.progress(this.state.progress);
  };

  checkbox = (e) => {
    this.setState({ delivery: !this.state.delivery });
    // if (e.target.checked) {
    //   this.setState({delivery:true});
    // } else {
    //   this.setState({ delivery: false });
    // }
    console.log(this.state.delivery);
    //console.log(e.target.checked);
  };
  //handle the date
  handleDate = (date, dateString) => {
    console.log(dateString);
    this.setState({ date: dateString });
  };
  //handle the time
  handleTime = (timeString) => {
    this.setState({time:timeString})
  };
  render() {
    // const loop = this.fetchEventTypes;
    //const value = this.checkInput;
    return (
      <Card className="dash-sec1-card">
        <form action="">
          <p className="dash-top-1" style={{ marginBottom: "10px" }}>
            Basic Details
          </p>
          <Row>
            <Col lg={12} md={12} sm={24} xs={24} style={{ padding: "10px" }}>
              <Form.Item label="Event Name">
                <Input
                  name="eventname"
                  onChange={this.handleInput.bind(this)}
                  onBlur={this.checkInput.bind(this)}
                  placeholder="I'm the content"
                  id="a"
                />
              </Form.Item>
              <Form.Item label="Your Name">
                <Input
                  name="creatorname"
                  onChange={this.handleInput.bind(this)}
                  placeholder="I'm the content"
                  onBlur={this.checkInput.bind(this)}
                  id="a"
                  //onBlur={this.checkInput}
                />
              </Form.Item>
              <Form.Item label="Your Phone Number">
                <Input
                  name="creatorphone"
                  onChange={this.handleInput.bind(this)}
                  placeholder="I'm the content"
                  id="success"
                  //onBlur={this.checkInput}
                />
              </Form.Item>
              <Form.Item label="Event Type">
                <Select
                  name="type"
                  autoFocus={true}
                  labelInValue={true}
                  mode="tags"
                  defaultValue={this.state.type}
                  // onBlur={this.checkInput}
                  //onChange={this.handleInput.bind(this)}
                >
                  {this.fetchEventTypes()}
                </Select>
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24} style={{ padding: "10px" }}>
              <Form.Item label="Description">
                <TextArea onChange={this.handleInput.bind(this)} name="des" />
              </Form.Item>
              <Form.Item label="Event Date & Time">
                <Row>
                  <Col lg={12} md={12} sm={24} sm={24} style={{ marginTop: 5 }}>
                    <DatePicker
                      style={{ width: "90%" }}
                      onChange={this.handleDate.bind(this)}
                    />
                  </Col>
                  <Col lg={12} md={12} sm={24} sm={24} style={{ marginTop: 5 }}>
                    <TimePicker
                      onChange={this.handleTime.bind(this)}
                      defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                      style={{ width: "90%" }}
                    />
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item
                label="Location"
                hasFeedback
                validateStatus={this.state.class}
              >
                <Input
                  name="eventname"
                  onChange={this.handleInput.bind(this)}
                  placeholder="I'm the content"
                  id="success"
                  // onBlur={this.checkInput}
                />
              </Form.Item>
            </Col>
          </Row>

          <p className="dash-top-1" style={{ marginBottom: "10px" }}>
            Equipments needed for the event
          </p>

          <Row>
            <Col lg={12} md={12} sm={24} xs={24} style={{ padding: "10px" }}>
              <Form.Item label="Equipment">
                <Select
                  name="type"
                  autoFocus={true}
                  labelInValue={true}
                  mode="tags"
                  defaultValue={this.state.type}
                  // onBlur={this.checkInput}
                  //onChange={this.handleInput.bind(this)}
                >
                  {this.fetchEq()}
                </Select>
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24} style={{ padding: "10px" }}>
              <Checkbox onClick={this.checkbox.bind(this)} name="delivery">
                Do you want to deliver those items to the venue?
              </Checkbox>
            </Col>
          </Row>
        </form>
      </Card>
    );
  }
}

export default EventSec1;
