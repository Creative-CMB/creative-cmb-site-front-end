import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Space } from "antd";
import { Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

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

import home_icon from '../Images/home_icon.png';
import logo_creative from '../Images/logo_creative.png';



const { Column, ColumnGroup } = Table;
const { confirm } = Modal;
const { Option } = Select;



class ManageUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            visible: false,
            users: [],
            user_id: "",
            selectedIndex: "",
            date_of_birth: "",
            first_name: "",
            last_name: "",
            mobile_number: "",
            email: "",
            selectedUser: {}, 
            selectedCity: "",
            selectedFirst_name: "",
            selectedLast_name: "",
            selectedMobile_number: "",
            selectedEmail: "",
            selectedDate_of_birth: "",
            selectedDistrict: "",
            district: "",
            city: "",
          };
    }

    componentWillMount() {
        this.fetchUserData();
      }
    
    componentDidMount() {
        document.title = "CreateCMB | Manage Users";
    }
      
    fetchUserData = () => {
        fetch("http://127.0.0.1:8000/users/")
          .then((response) => response.json())
          .then((data) => this.setState({ users: data }));
    };

      
    deleteUser = () => {};

    showDeleteConfirm = (data) => {
    
    confirm({
        title: "Are you sure delete this User?",
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
            description: "You have successfully deleted user " + data,
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
        this.state.users
          .filter((item) => item.user_id === id)
          .map((filterdItem) => this.setState({ selectedUser: filterdItem }));
    
        this.setState(
          {
            visible: true,
          },
          () => console.log(this.state.selectedUser)
        );
    
        console.log(this.state.selectedUser);
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
            user_id: this.state.selectedUser.user_id,
            date_of_birth: this.state.selectedDate_of_birth,
            first_name: this.state.selectedFirst_name,
            last_name: this.state.selectedLast_name,
            mobile_number: this.state.selectedMobile_number,
            email: this.state.selectedEmail,            
            district: this.state.selectedDistrict,
            city: this.state.selectedCity,
        };

        console.log("data", data);

        var url =
        "http://127.0.0.1:8000/user-update/" + this.state.selectedUser.user_id + "/";
        console.log("data", url);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
            alert(response.headers)
            }).catch((err) => console.log(err));
            console.log(data);
    };
  
    updateData = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
  
    confirm = (data) => {
        var url = "http://127.0.0.1:8000/user-delete/" + data + "/";

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
                    description: "You have successfully deleted user " + data,
                    duration: 1,
                };
                notification.open(args);

                this.fetchUserData();
            }
        })
        .catch((err) => console.log(err));
        console.log(data);
        
    };



    cancel = (e) => {
        console.log(e);
        message.error("Click on No");
    };

  
    getdate = (e) => {
        //alert(e);
        this.setState({ selectedDate_of_birth: e });
    };

    render() { 
        return ( 
            <div>
                <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1 col-xm-1">
                        <div class="sidenav" style={{backgroundColor:'#3a64c7'}}>
                            <div className="row">
                                <a href="/userdashboard">
                                    <img src={home_icon} style={{marginLeft:50,width:50, height:50 }}></img>
                                </a>
                                <a href="/addusers" style={{marginTop:30,marginLeft:20}}>Add Customers</a>
                                <a href="/manageusers" style={{marginTop:30,marginLeft:20}}>Manage Customers</a>                                
                                <a href="/manageloggedusers" style={{marginTop:30,marginLeft:20}}>Manage Logged Users</a>                                                    
                                <a href="http://127.0.0.1:8000/registeradmin/" style={{marginTop:30,marginLeft:20}}>Add Admin</a>
                            </div>
                            <div className="row" style={{height:300}}>
                            </div>
                            <div className="row" style={{marginBottom:10}}>
                                <a href="http://127.0.0.1:8000/login/" style={{marginTop:30,marginLeft:20}}>
                                    <h3 >
                                        Logout
                                    </h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11 col-xm-11">
                        
                        <div className="row">
                            <div className="col-lg-11" style={{backgroundColor:"", height: 100}}>
                                <h1 style={{paddingTop:50, paddingLeft:120}}>User Management: Manage Users</h1>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1 col-xm-1" style={{backgroundColor:"", height:100}}> 
                                <img src={logo_creative} style={{marginLeft: 50, marginTop:0, width:70, height:100 }}></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 d-md-block d-none" style={{backgroundColor:"white", height: 50}}>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb" style={{marginTop:20, marginLeft:120}}>
                                        <li class="breadcrumb-item"><a href="/userdashboard">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">ManageUsers</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 50, marginLeft:120, marginTop:50}}>
                                <a href="/addusers">
                                    <button type="button" class="btn btn-primary" style={{backgroundColor:"Grey", marginLeft:1040,}}> + Add Users </button>
                                </a> 
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 980}}>
                                
                                            <form>
                                                <div className="row">   
                                                <Table dataSource={this.state.users} className="mt-5" style={{marginLeft: 0, paddingTop: 0, width:1150}}>
                                                    <Column title="User Id" dataIndex="user_id" key="user_id" />                                                    
                                                    <Column title="First Name" dataIndex="first_name" key="first_name" />                                                    
                                                    <Column title="Last Name" dataIndex="last_name" key="last_name" />                                                    
                                                    <Column title="Email" dataIndex="email" key="email" />
                                                    <Column title="Mobile Number" dataIndex="mobile_number" key="mobile_number" />
                                                    <Column title="Date of Birth" dataIndex="date_of_birth" key="date_of_birth" />                                                    
                                                    <Column title="City" dataIndex="city" key="city" />                                                    
                                                    <Column title="District" dataIndex="district" key="district" />
                                                    <Column
                                                    title="Action"
                                                    key="action"
                                                    render={(text, record) => (
                                                        <Space size="middle">
                                                        <Button
                                                            onClick={() => this.showDrawer(record.user_id)}
                                                            type="primary"
                                                        >
                                                            Edit user details
                                                        </Button>
                                                        <Popconfirm
                                                            title="Are you sure delete this user?"
                                                            onConfirm={() => this.confirm(record.user_id)}
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
                                                    title="Update User"
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
                                                                name="first_name"
                                                                label="First Name"
                                                                rules={[
                                                                { required: true, message: "Please enter a valid first name" },
                                                                ]}
                                                            >
                                                                <Input
                                                                placeholder="Please enter a first name"
                                                                key={this.state.selectedUser.first_name}
                                                                name="selectedFirst_name"
                                                                defaultValue={this.state.selectedUser.first_name}
                                                                onChange={this.updateData}
                                                                />
                                                            </Form.Item>
                                                            </Col>
                                                            <Col span={12}>
                                                            <Form.Item
                                                                name="last_name"
                                                                label="Last Name"
                                                                rules={[
                                                                { required: true, message: "Please enter a valid last name" },
                                                                ]}
                                                            >
                                                                <Input
                                                                placeholder="Please enter a last name"
                                                                name="selectedLast_name"
                                                                defaultValue={this.state.selectedUser.last_name}
                                                                onChange={this.updateData}
                                                                />
                                                            </Form.Item>
                                                            </Col>
                                                        </Row>
                                                        <Row gutter={16}>
                                                            <Form.Item
                                                                name="email"
                                                                label="Email"
                                                                rules={[
                                                                { required: true, message: "Please enter an email address" },
                                                                ]}
                                                            >
                                                                <Input
                                                                placeholder="Please enter an email"
                                                                name="selectedEmail"
                                                                defaultValue={this.state.selectedUser.email}
                                                                onChange={this.updateData}
                                                                />
                                                            </Form.Item>
                                                        </Row>
                                                        <Row gutter={16}>
                                                            <Form.Item
                                                                name="mobile_number"
                                                                label="Mobile Number"
                                                                rules={[
                                                                { required: true, message: "Please enter a mobile number" },
                                                                ]}
                                                            >
                                                                <Input
                                                                placeholder="Please enter a mobile number"
                                                                name="selectedMobile_number"
                                                                defaultValue={this.state.selectedUser.mobile_number}
                                                                onChange={this.updateData}
                                                                />
                                                            </Form.Item>
                                                        </Row>
                                                        <Row gutter={16}>
                                                            <Form.Item
                                                                name="date_of_birth"
                                                                label="Date of Birth"
                                                                rules={[
                                                                {
                                                                    required: true,
                                                                    message: "Please choose the date of birth",
                                                                },
                                                                ]}
                                                            >
                                                                <DatePicker
                                                                onChange={(value) =>
                                                                    this.getdate(value.format("YYYY-MM-DD"))
                                                                }
                                                                name="selectedDate_of_birth"
                                                                style={{ width: "100%" }}
                                                                defaultValue={moment(this.state.selectedUser.date_of_birth)}
                                                                />
                                                            </Form.Item>                                                  
                                                        </Row>
                                                        <Row gutter={16}>
                                                            <Col span={24}>
                                                            <Form.Item
                                                                name="city"
                                                                label="City"
                                                                rules={[
                                                                {
                                                                    required: true,
                                                                    message: "please enter a city",
                                                                },
                                                                ]}
                                                            >
                                                                <Input
                                                                rows={4}
                                                                onChange={this.updateData}
                                                                name="selectedCity"
                                                                placeholder= "please enter a city"
                                                                defaultValue={this.state.selectedUser.city}
                                                                />
                                                            </Form.Item>
                                                            </Col>
                                                        </Row>
                                                        <Row gutter={16}>
                                                            <Col span={24}>
                                                            <Form.Item
                                                                name="district"
                                                                label="District"
                                                                rules={[
                                                                {
                                                                    required: true,
                                                                    message: "please enter a district",
                                                                },
                                                                ]}
                                                            >
                                                                <Input
                                                                rows={4}
                                                                onChange={this.updateData}
                                                                name="selectedDistrict"
                                                                placeholder= "please enter a district"
                                                                defaultValue={this.state.selectedUser.district}
                                                                />
                                                            </Form.Item>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </Drawer>   
                                                </div>

                                                  
                                            </form>
                                      
                                </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{}}>
                                <a href="/userdashboard">
                                    <button type="button" class="btn btn-primary" style={{backgroundColor:"red", marginBottom:30}}> Go Back </button>
                                </a>
                            </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ManageUsers;