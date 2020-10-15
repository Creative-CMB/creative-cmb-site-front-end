import React, { Component } from 'react';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import { Input } from 'antd';
import { Button } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
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


class ViewDeptSupervisors extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
    }

    componentDidMount(){
        //fetching the data from bend

        this.fetchEmpDetails();
    }

    fetchEmpDetails = () =>{
        var url = "http://127.0.0.1:8000/deptSupervisor-list/";

        axios.get(url).then(res => {
            const data = res.data;
            this.setState({data});
        })
        
    }

    showDeleteConfirm = (data) => {
        confirm({
          title: "Are you sure delete this Department Supervisor?",
          icon: <ExclamationCircleOutlined />,
          content:
            "You are gonna delete " +
            data +
            " from the database. Once you click on the delete button, the deletion can not reverse back ⚠⚠",
          okText: "Yes,Delete",
          okType: "danger",
          cancelText: "No,Cancel",
          onOk() {
           
            const args = {
              message: "Notification",
              description: "You have successfully deleted Department Supervisor " + data,
              duration: 0,
            };
            notification.open(args);
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      };
    //tookend



    confirm = (data) => {
        var url = "http://127.0.0.1:8000/deptSupervisor-Delete/" + data + "/";
    
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
          description: "You have successfully deleted department supervisor " + data,
          duration: 0,
        };
        notification.open(args);
      };
    
      cancel = (e) => {
        console.log(e);
        message.error("Canceled deleting Department Supervisor");
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
                <h1 style={{color: "DodgerBlue", fontSize: '30px',fontWeight:"bold"}}><center>DEPARTMENT SUPERVISOR</center></h1><br></br><br></br>
            
                <br></br>
                <div>
                    <Button style={{border: "2px solid #008CBA",fontWeight:"bold"}}block ><Link to="/addDeptSupervisor" >Add Department Supervisor</Link></Button>
                </div><br></br>

                <div className="table-responsive">
                            <table className="table" style={{fontSize:"10px"}}>
                                <thead className="theads">
                                <tr>
                                    <th>Employee ID</th>
                                    <th>Department ID</th>
                                    <th>From Date</th>
                                    <th>To Date</th>
                                    
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    
                                    
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.data.map(user =>{
                                    return(
                                    <tr>
                                    <td>{user.emp_id}</td>
                                    <td>{user.dept_id}</td>
                                    <td>{user.from_date}</td>
                                    <td>{user.to_date}</td>
                                    
                                    
                                    
                                    <td>
                                        <Button type="button"
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
                                        title="Are you sure delete this Department Supervisor?"
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
                            </div>
            </div>
  
        </div>
         );
    }
}
 
export default ViewDeptSupervisors;
