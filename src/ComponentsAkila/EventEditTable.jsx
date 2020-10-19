import React, { Component } from "react";
import { Table, Tag, Space, TimePicker } from "antd";
import { Link } from "react-router-dom";
import { Button } from "antd";
import moment from "moment";
import {
  Modal,
  notification,
  Drawer,
  Form,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Popconfirm,
  message,
} from "antd";
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import EventSuccess from "./EventSuccess";
import EventSum from "./EventSum";

const { Column, ColumnGroup } = Table;
const { confirm } = Modal;
const { Option } = Select;

class EventEditTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: [],
      visible: false,
      selectedIndex: "",
      selectedEvent: {},
      eventName: "",
      creatorName: "",
      phone: "",
      type: "",
      location: "",
      date: "",
      time: "",
      des: "",
      budget: "",
      status: "",
    };
  }

  componentWillMount() {
    this.fetchEventData();
  }

  componentDidMount() {
    document.title = "CreateCMB | Edit Event";
  }
  fetchEventData = () => {
    fetch("http://127.0.0.1:8000/events/")
      .then((response) => response.json())
      .then((data) => this.setState({ event: data }));
  };

  deleteEvent = () => {};

  showDeleteConfirm = (data) => {
    confirm({
      title: "Are you sure delete this Event?",
      icon: <ExclamationCircleOutlined />,
      content:
        "You are gonna delete " +
        data +
        " from the database. Once you click on the delete button, the deletion can not reverse back ⚠⚠",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        //delete the event

        //open the notification
      

        // const args = {
        //   message: "Notification",
        //   description: "You have successfully deleted event " + data,
        //   duration: 0,
        // };
        // notification.open(args);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  showDrawer = (id) => {
    this.state.event
      .filter((item) => item.event_id === id)
      .map((filterdItem) => this.setState({ selectedEvent: filterdItem }));

    this.setState(
      {
        visible: true,
      },
      () => console.log(this.state.selectedEvent)
    );

    console.log(this.state.selectedEvent);
  };

  onClose = () => {
    //this.setState({ selectedEvent: null });
    window.location.reload(false);
    this.setState(
      {
        visible: false,
      },
      () => console.log(this.state.visible)
    );
  };

  submitData = () => {
    const data = {
      event_id: this.state.selectedEvent.event_id,
      user_id: this.state.selectedEvent.user_id,
      event_name: this.state.eventName,
      budget: this.state.budget,
      email_address: this.state.selectedEvent.email_address,
      occassion_type: this.state.selectedEvent.occassion_type,
      time: this.state.time,
      head_count: this.state.selectedEvent.head_count,
      creator_phone: this.state.selectedEvent.creator_phone,
      schedule_file: this.state.selectedEvent.schedule_file,
      date: this.state.date,
      event_type: this.state.type,
      location: this.state.location,
      description: this.state.des,
      event_creator_name: this.state.creatorName,
    };

    console.log("data", data);

    var url =
      "http://127.0.0.1:8000/event-update/" + this.state.selectedEvent.event_id;
    console.log("data", url);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => this.setState({ status: response.status }))
      .catch((err) => console.log(err));
  };

  updateData = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  selectData = (e) => {
    this.setState({ type: e[0] });
    //alert(e);
  };

  confirm = (data) => {
    var url = "http://127.0.0.1:8000/event-delete/" + data + "/";

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(data);
          const args = {
            message: "Notification",
            description: "You have successfully deleted event " + data,
            duration: 0,
          };
          notification.open(args);

          this.fetchEventData();
        }
      })
      .catch((err) => console.log(err));
    console.log(data);
    // const args = {
    //   message: "Notification",
    //   description: "You have successfully deleted event " + data,
    //   duration: 0,
    // };
    // notification.open(args);
  };

  cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  getdate = (e) => {
    //alert(e);
    this.setState({ date: e });
  };

  setTime = (val) => {
    //alert(val);
    this.setState({ time: val });
  };

  render() {
    if (this.state.status == "200") {
      return <EventSuccess id={this.state.selectedEvent.event_id} />;
    } else {
      return (
        <>
          <Table dataSource={this.state.event} className="mt-5">
            <Column title="Event Name" dataIndex="event_name" key="id" />
            <Column
              title="Description"
              dataIndex="description"
              key="description"
              className="d-none d-md-block"
            />
            <Column title="Date" dataIndex="date" key="date" />
            <Column title="Time" dataIndex="time" key="time" />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Space size="middle">
                  <Button
                    onClick={() => this.showDrawer(record.event_id)}
                    type="primary"
                  >
                    Edit this event
                  </Button>
                  <Popconfirm
                    title="Are you sure delete this task?"
                    onConfirm={() => this.confirm(record.event_id)}
                    onCancel={this.cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <a href="#">Delete</a>
                  </Popconfirm>
                </Space>
              )}
            />
          </Table>

          <Drawer
            title="Update event"
            width="auto"
            onClose={this.onClose}
            visible={this.state.visible}
            bodyStyle={{ paddingBottom: 10 }}
            footer={
              <div
                style={{
                  textAlign: "right",
                }}
              >
                <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                  Cancel
                </Button>
                <Button onClick={this.submitData} type="primary">
                  Submit
                </Button>
              </div>
            }
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="eventName"
                    label="Event Name"
                    rules={[
                      { required: true, message: "Please enter a event name" },
                    ]}
                  >
                    <Input
                      placeholder="Please enter a event name"
                      key={this.state.selectedEvent.event_name}
                      name="eventName"
                      defaultValue={this.state.selectedEvent.event_name}
                      onChange={this.updateData}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="creatorName"
                    label="Event Creator Name"
                    rules={[{ required: true, message: "Please enter url" }]}
                  >
                    <Input
                      style={{ width: "100%" }}
                      name="creatorName"
                      onChange={this.updateData}
                      placeholder="Please enter the name"
                      defaultValue={this.state.selectedEvent.event_creator_name}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="phone"
                    label="Event Creator Phone"
                    rules={[
                      {
                        required: true,
                        message: "Please enter the phone number",
                      },
                    ]}
                  >
                    <Input
                      style={{ width: "100%" }}
                      onChange={this.updateData}
                      name="phone"
                      placeholder="Please enter the phone number"
                      defaultValue={this.state.selectedEvent.creator_phone}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="eventType"
                    label="Event Type"
                    rules={[
                      { required: true, message: "Please choose the type" },
                    ]}
                  >
                    <Select
                      mode="tags"
                      name="type"
                      onChange={(value) => this.selectData(value)}
                      placeholder="Please choose the type"
                      defaultValue={this.state.selectedEvent.event_type}
                    >
                      <Option value="wedding">Wedding</Option>
                      <Option value="election campaign">
                        Election Campaign
                      </Option>
                      <Option value="seminar">Seminar</Option>
                      <Option value="seminar"></Option>
                      <Option value="othout-door campaigner">
                        out-door campaign
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="location"
                    label="Location"
                    rules={[
                      { required: true, message: "Please enter thr Location" },
                    ]}
                  >
                    <Input
                      style={{ width: "100%" }}
                      onChange={this.updateData}
                      name="location"
                      placeholder="Enter thr location"
                      defaultValue={this.state.selectedEvent.location}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="dateTime"
                    label="Date of the Event"
                    rules={[
                      {
                        required: true,
                        message: "Please choose the dateTime",
                      },
                    ]}
                  >
                    <DatePicker
                      onChange={(value) =>
                        this.getdate(value.format("YYYY-MM-DD"))
                      }
                      name="date"
                      style={{ width: "100%" }}
                      defaultValue={moment(this.state.selectedEvent.date)}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="dateTime"
                    label="Time of the Event"
                    rules={[
                      {
                        required: true,
                        message: "Please choose the dateTime",
                      },
                    ]}
                  >
                    <TimePicker
                      onChange={(value) =>
                        this.setTime(value.format("hh:mm:ss"))
                      }
                      name="time"
                      style={{ width: "100%" }}
                      defaultValue={moment(
                        this.state.selectedEvent.time,
                        "HH:mm:ss"
                      )}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                      {
                        required: true,
                        message: "please enter url description",
                      },
                    ]}
                  >
                    <Input
                      rows={4}
                      onChange={this.updateData}
                      name="des"
                      placeholder="please enter url description"
                      defaultValue={this.state.selectedEvent.description}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="items"
                    label="Select Equipments"
                    rules={[
                      { required: true, message: "Please choose the items" },
                    ]}
                  >
                    <Select
                      mode="tags"
                      style={{ width: "100%" }}
                      placeholder="Please select"
                      defaultValue={["a10", "c12"]}
                    ></Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="budget"
                    label="Enter the Budget"
                    rules={[
                      { required: true, message: "Please insert your budget" },
                    ]}
                  >
                    <Input
                      style={{ width: "100%" }}
                      onChange={this.updateData}
                      name="budget"
                      placeholder="Enter the head budget"
                      defaultValue={this.state.selectedEvent.budget}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Drawer>
        </>
      );
    }
  }
}

export default EventEditTable;
