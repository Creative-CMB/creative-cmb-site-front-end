import React, { Component } from "react";
import { Table, Tag, Space, TimePicker  } from "antd";
import { Link } from "react-router-dom";
import { Button } from "antd";
import moment from 'moment';
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
} from "antd";
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Column, ColumnGroup } = Table;
const { confirm } = Modal;
const { Option } = Select;

class EventEditTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: [],
      visible: false,
      selectedIndex: '',
      selectedEvent: {},
      
    };
  }

  componentDidMount() {
    this.fetchEventData();
  }

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

        const args = {
          message: "Notification",
          description: "You have successfully deleted event " + data,
          duration: 0,
        };
        notification.open(args);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  showDrawer = (id) => {
    this.setState({ selectedIndex: id });
    this.state.event.map((item) => {
      if (item.id === id) {
        this.setState({ selectedEvent: item });
      }
    })
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  fetchEventData = () => {
    fetch(
      "https://my-json-server.typicode.com/akilaliyanage/json-fake-api-server/event"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ event: data }));
  };

  render() {
    return (
      <>

      <Table dataSource={this.state.event} className="mt-5">
        <Column title="Event Name" dataIndex="eventname" key="id" />
        <Column title="Description" dataIndex="description" key="description" />
        <Column title="Date" dataIndex="date" key="date" />
        <Column title="Time" dataIndex="time" key="time" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
            <Button onClick={() => this.showDrawer(record.id)} type="primary">
                Edit this event
              </Button>
              <Button
                danger
                onClick={() => this.showDeleteConfirm(record.id)}
                type="dashed"
              >
                Delete
              </Button>
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
                textAlign: 'right',
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
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
                  rules={[{ required: true, message: 'Please enter a event name' }]}
                >
                  <Input placeholder="Please enter a event name" name="eventName" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="creatorName"
                  label="Event Creator Name"
                  rules={[{ required: true, message: 'Please enter url' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    name="creatorName"
                    placeholder="Please enter the name"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="phone"
                  label="Event Creator Phone"
                  rules={[{ required: true, message: 'Please enter the phone number' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    name="phone"
                    placeholder="Please enter the phone number"
                  />
                  
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="eventType"
                  label="Event Type"
                  rules={[{ required: true, message: 'Please choose the type' }]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="private">Birthday</Option>
                    <Option value="public">Political campaign</Option>
                    <Option value="public">Political campaign</Option>
                    <Option value="public">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="location"
                  label="Location"
                  rules={[{ required: true, message: 'Please enter thr Location' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    name="location"
                    placeholder="Enter thr location"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateTime"
                  label="Date of the Event"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="dateTime"
                  label="Date of the Event"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  <TimePicker
                    style={{ width: '100%' }}
                    defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
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
                      message: 'please enter url description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter url description" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="items"
                  label="Select Equipments"
                  rules={[{ required: true, message: 'Please choose the items' }]}
                >
                  <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                  >
                   
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="headCount"
                  label="Select Equipments"
                  rules={[{ required: true, message: 'Please insert the head count' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    name="headCount"
                    placeholder="Enter the head Count"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="budget"
                  label="Enter the Budget"
                  rules={[{ required: true, message: 'Please insert your budget' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    name="budget"
                    placeholder="Enter the head budget"
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

export default EventEditTable;
