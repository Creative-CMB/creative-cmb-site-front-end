import React, { Component } from 'react';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import { Input } from 'antd';
import { Button } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from "moment";
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
    Modal,
    notification,
    Drawer,
    Form,
    Col,
    Row,
    Select,
    DatePicker,
    Popconfirm,
    message,
  } from "antd";

  const { confirm } = Modal;
  const { Option } = Select;
const { Search } = Input;

class ViewDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          data:[],
            department:[],
            selectedDept:{},
            admin_id:"",
            dept_id:"",
            dept_name:"",
            dept_manager_name:"",
            
         };
    }

    componentDidMount(){
        //fetching the data from bend
        this.fetchDepartment();
    }

    componentDidMount() {
      document.title = "CreateCMB | Update Department";
  }

    fetchDepartment = () =>{
        var url = "http://127.0.0.1:8000/department-list/";

        axios.get(url).then(res => {
            const data = res.data;
            this.setState({data});
        })
        
    }

    //Delete confirmation
    showDeleteConfirm = (data) => {
        confirm({
          title: "Are you sure delete this Department?",
          icon: <ExclamationCircleOutlined />,
          content:
            "You are gonna delete " +
            data +
            " from the database",
          okText: "Yes,Delete",
          okType: "danger",
          cancelText: "No,Cancel",
          onOk() {
           
            const args = {
              message: "Notification",
              description: "You have successfully deleted Department " + data,
              duration: 0,
            };
            notification.open(args);
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      };
    
      //Confirm delete and delete
    confirm = (data) => {
        var url = "http://127.0.0.1:8000/department-Delete/" + data + "/";
    
        fetch(url, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        })
          
          .catch((err) => console.log(err));
        console.log(data);
        const args = {
          message: "Notification",
          description: "You have successfully deleted department " + data,
          duration: 0,
        };
        notification.open(args);
      };
    
      cancel = (e) => {
        console.log(e);
        message.error("Canceled deleting Department");
      };

      //update
      
      showDrawer = (id) => {
        this.state.department
          .filter((item) => item.dept_id === id)
          .map((filterdItem) => this.setState({ selectedDept: filterdItem }));
    
        this.setState(
          {
            visible: true,
          },
          () => console.log(this.state.selectedDept)
        );
    
        console.log(this.state.selectedDept);
      };

  

    onClose = () => {
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
            admin_id: this.state.selectedDept.admin_id,
            dept_id:this.state.selectedDept.dept_id,
            dept_name:this.state.selectedDept.dept_name,
            dept_manager_name:this.state.selectedDept.dept_manager_name,
        };

        console.log("data", data);

        var url =
        "http://127.0.0.1:8000/department-Update/" + this.state.selectedDept.dept_id + "/";
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

  


    render() { 
        return ( 
            <div className="row">
  
            <div className="col-lg-1.5 side" style={{backgroundColor:"LightBlue", height:"700px"}}>
                {/*Navigation bar */}
                <br></br>
                <EmployeeSideNavBar />
            </div>
  
            <div className="col main1" style={{height:"100%"}}>
  
                <br></br>
                <h1 style={{color: "DodgerBlue", fontSize: '30px',fontWeight:"bold"}}><center>DEPARTMENT</center></h1><br></br><br></br>
                {/*Search Bar */}
            
                <br></br>
                <div>
                    <Button style={{border: "2px solid #008CBA",fontWeight:"bold"}}block ><Link to="/addDepartment" >Add Department</Link></Button>
                </div><br></br>


                        <div className="table-responsive">
                            <table className="table" style={{fontSize:"13px"}}>
                                <thead className="theads">
                                <tr>
                                    <th>Department ID</th>
                                    <th>Admin ID</th>
                                    <th>Department Name</th>
                                    <th>Manager of the Department</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                   
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.data.map(user =>{
                                    return(
                                    <tr>
                                    <td>{user.dept_id}</td>
                                    <td>{user.admin_id}</td>
                                    <td>{user.dept_name}</td>
                                    <td>{user.dept_manager_name}</td>
                                    
                                     <td>
                                        <Button type="button" onClick={() => this.showDrawer(user.dept_id)}type="primary"
                                        style={{
                                            color:"white",
                                            padding:"5px 10px",
                                            fontSize:"10px",
                                            fontWeight:"bold",
                                            cursor:"pointer",
                                            backgroundColor:"white",
                                            color:"black",
                                            border:"2px solid green",

                                        }}
                                        >Edit</Button>
                                    </td>
                                    <td>
                                    <Button
                                    style={{
                                        color:"white",
                                        padding:"5px 10px",
                                        fontSize:"10px",
                                        fontWeight:"bold",
                                        cursor:"pointer",
                                        backgroundColor:"white",
                                        color:"black",
                                        border:"2px solid red",

                                    }}>
                                    <Popconfirm
                                        title="Are you sure delete this Department?"
                                        onConfirm={() => this.confirm(user.dept_id)}
                                        onCancel={this.cancel}
                                        okText="Yes,Delete"
                                        cancelText="No,Cancel"
                                    >
                                        <a href="#">Delete</a>
                                    </Popconfirm>
                                    </Button>
                                    </td>
                                    </tr>
                                    );
                                })}
                                </tbody>
                            </table>

                            
                            <Drawer
                              title="Update Department"
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
                                      name="admin_id"
                                      label="Admin ID"
                                      rules={[
                                        { required: true, message: "Please enter an Admin id" },
                                      ]}
                                    >
                                      <Input
                                        placeholder="Please enter an Admin id"
                                        key={this.state.selectedDept.admin_id}
                                        name="admin_id"
                                        defaultValue={this.state.selectedDept.admin_id}
                                        onChange={this.updateData}
                                      />
                                    </Form.Item>
                                  </Col>
                                  <Col span={12}>
                                    <Form.Item
                                      name="dept_id"
                                      label="Department ID"
                                      rules={[{ required: true, message: "Please enter a department id" }]}
                                    >
                                      <Input
                                        style={{ width: "100%" }}
                                        name="dept_id"
                                        onChange={this.updateData}
                                        placeholder="Please enter the department id"
                                        defaultValue={this.state.selectedDept.dept_id}
                                      />
                                    </Form.Item>
                                  </Col>
                                </Row>
                                <Row gutter={16}>
                                  <Col span={12}>
                                    <Form.Item
                                      name="dept_name"
                                      label="Department Name"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Please enter the department name",
                                        },
                                      ]}
                                    >
                                      <Input
                                        style={{ width: "100%" }}
                                        onChange={this.updateData}
                                        name="dept_name"
                                        placeholder="Please enter the department name"
                                        defaultValue={this.state.selectedDept.dept_name}
                                      />
                                    </Form.Item>
                                  </Col>
                                  <Col span={12}>
                                    <Form.Item
                                      name="dept_manager_name"
                                      label="Manager of the department"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Please enter the Manager",
                                        },
                                      ]}
                                    >
                                      <Input
                                        style={{ width: "100%" }}
                                        onChange={this.updateData}
                                        name="dept_manager_name"
                                        placeholder="Please enter the Manager"
                                        defaultValue={this.state.selectedDept.dept_manager_name}
                                      />
                                    </Form.Item>
                                  </Col>
                                </Row>
                              </Form>
                            </Drawer>
                                    
                            </div>
                    
                </div>
            </div>
  
        
         );
    }
}
 
export default ViewDepartment;
