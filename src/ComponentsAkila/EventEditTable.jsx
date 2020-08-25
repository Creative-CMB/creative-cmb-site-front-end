import React, { Component } from "react";
import { Table, Tag, Space } from "antd";
import { Link } from "react-router-dom";
import { Button } from "antd";
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

  showDrawer = () => {
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
              <Button onClick={this.showDrawer} type="primary">
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
          title="Create a new account"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
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
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="url"
                  label="Url"
                  rules={[{ required: true, message: 'Please enter url' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="owner"
                  label="Owner"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                >
                  <Select placeholder="Please select an owner">
                    <Option value="xiao">Xiaoxiao Fu</Option>
                    <Option value="mao">Maomao Zhou</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true, message: 'Please choose the type' }]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="approver"
                  label="Approver"
                  rules={[{ required: true, message: 'Please choose the approver' }]}
                >
                  <Select placeholder="Please choose the approver">
                    <Option value="jack">Jack Ma</Option>
                    <Option value="tom">Tom Liu</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateTime"
                  label="DateTime"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  <DatePicker.RangePicker
                    style={{ width: '100%' }}
                    getPopupContainer={trigger => trigger.parentElement}
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
          </Form>
        </Drawer>
      </>
    );
  }
}

export default EventEditTable;
