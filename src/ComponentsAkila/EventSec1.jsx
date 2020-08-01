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
  Upload,
  message,
} from "antd";
import { red } from "@ant-design/colors";
import moment from "moment";
import { InboxOutlined } from "@ant-design/icons";
import * as EmailValidator from "email-validator";

const { Option } = Select;
const { TextArea } = Input;
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

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
      time: "",
      budget: "",
      headC: "",
      email: "",
      emailval: "warning",
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
    console.log(e.target.name ," - ",e.target.value);
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
    this.setState({ time: timeString });
  };

  validateEmail = (e) => {
    console.log(this.state.emailval);
    console.log(this.state.email);
    //console.log(EmailValidator.validate(e.target.value))
    if (EmailValidator.validate(e.target.value)) {
      this.setState({ emailval:"success"})
      console.log(this.state.emailval);
    } else {
       alert(
         " ⚠⚠ the email you have enterd is in incorrect format. please enter the email again ⚠⚠⚠"
       );
    }
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
                  name="location"
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
          <p className="dash-top-1" style={{ marginBottom: "10px" }}>
            Event Documents and Other Details
          </p>
          <Row>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single PDF documet. Strictly prohibit from
                  uploading company data or other band files. Only the Event
                  Schedule
                </p>
              </Dragger>
            </Col>
            <Col style={{ padding: 10 }} lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="Expected Budget">
                <Input
                  name="budget"
                  onChange={this.handleInput.bind(this)}
                  placeholder="Value in Sri Lankan Rupees"
                  id="success"
                  //onBlur={this.checkInput}
                  width="100%"
                />
              </Form.Item>
              <Form.Item label="Expected Head Count">
                <Input
                  name="headC"
                  onChange={this.handleInput.bind(this)}
                  placeholder="If none keep this blank"
                  id="success"
                  //onBlur={this.checkInput}
                />
              </Form.Item>
              <Form.Item label="Your Email" hasFeedback validateStatus={this.state.emailval}>
                <Input name="email" onBlur={this.validateEmail.bind(this)} onChange={this.handleInput.bind(this)} placeholder="Event details will be sent to this email" id="success" />
              </Form.Item>
            </Col>
          </Row>
        </form>
      </Card>
    );
  }
}

export default EventSec1;
