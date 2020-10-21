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



class manageLoggedUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            visible: false,
            loggedUsers: [],
            id: "",
            date_joined: "",
            first_name: "",
            last_name: "",
            password: "",
            email: "",
            is_active: "",
            is_staff: "",
            is_superuser: "",
            last_login:"",
            username:""
          };
    }

    componentWillMount() {
        this.fetchUserData();
      }
    
    componentDidMount() {
        document.title = "CreateCMB | Manage Logged Users";
    }
      
    fetchUserData = () => {
        fetch("http://127.0.0.1:8000/loggedusers/")
          .then((response) => response.json())
          .then((data) => this.setState({ loggedUsers: data }));
      };

      
    deleteUser = () => {};

    showDeleteConfirm = (data) => {
    
    confirm({
        title: "Are you sure delete this Logged User?",
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
            description: "You have successfully deleted logged user " + data,
            duration: 0,
            };
            notification.open(args);
        },

        onCancel() {
            console.log("Cancel");
        },
        });
    };

    confirm = (data) => {
        var url = "http://127.0.0.1:8000/loggeduser-delete/" + data + "/";

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
                    duration: 0,
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
                                <h1 style={{paddingTop:50, paddingLeft:120}}>User Management: Manage Logged Users</h1>
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
                                        <li class="breadcrumb-item active" aria-current="page">ManageLoggedUsers</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 50, marginLeft:120, marginTop:50}}>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 980}}>
                                
                                            <form>
                                                <div className="row">   
                                                <Table dataSource={this.state.loggedUsers} className="mt-5" style={{marginLeft: 0, paddingTop: 0, width:1150}}>
                                                    <Column title="Id" dataIndex="id" key="id" />                                                    
                                                    <Column title="Username" dataIndex="username" key="username" /> 
                                                    <Column title="First Name" dataIndex="first_name" key="first_name" />                                                    
                                                    <Column title="Last Name" dataIndex="last_name" key="last_name" />                                                    
                                                    <Column title="Email" dataIndex="email" key="email" />                                                                                                                                           
                                                    <Column title="Password" dataIndex="password" key="password"  />                                                                                      
                                                    <Column title="Last Login" dataIndex="last_login" key="last_login" />                                                                                                                                         
                                                    <Column title="Date Joined" dataIndex="date_joined" key="date_joined" />
                                                    <Column
                                                    title="Action"
                                                    key="action"
                                                    render={(text, record) => (
                                                        <Space size="middle">
                                                        <Popconfirm
                                                            title="Are you sure delete this logged user?"
                                                            onConfirm={() => this.confirm(record.id)}
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
 
export default manageLoggedUsers;