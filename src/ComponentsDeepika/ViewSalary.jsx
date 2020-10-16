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

class ViewSalary extends Component {
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
        var url = "http://127.0.0.1:8000/Salary-list/";

        axios.get(url).then(res => {
            const data = res.data;
            this.setState({data});
        })
        
    }

    showDeleteConfirm = (data) => {
        confirm({
          title: "Are you sure delete this Salary detail?",
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
              description: "You have successfully deleted Salary detail " + data,
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
        var url = "http://127.0.0.1:8000/Salary-Delete/" + data + "/";
    
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
          description: "You have successfully deleted Salary detail " + data,
          duration: 0,
        };
        notification.open(args);
      };
    
      cancel = (e) => {
        console.log(e);
        message.error("Canceled deleting Salary detail");
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
                <h1 style={{color: "DodgerBlue", fontSize: '30px',fontWeight:"bold"}}><center>SALARY DETAILS</center></h1><br></br><br></br>
                
                <br></br>
                <div>
                    <Button style={{border: "2px solid #008CBA",fontWeight:"bold"}}block ><Link to="/addSalary" >Add Salary</Link></Button>
                </div><br></br>

                <div className="table-responsive">
                            <table className="table" style={{fontSize:"10px"}}>
                                <thead className="theads">
                                <tr>
                                    <th>Salary ID</th>
                                    <th>Employee ID</th>
                                    <th>Department ID</th>
                                    <th>Basic Salary</th>
                                    <th>Extra Hours</th>
                                    <th>Bonus</th>
                                    <th>Total Salary</th>
                                    <th>Month</th>
                                    <th>Year</th>
                                    <th>Paid</th>
                                    <th>Paid Date</th>
                                    
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    
                                    
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.data.map(user =>{
                                    return(
                                    <tr>
                                    <td>{user.sal_id}</td>
                                    <td>{user.emp_det_id}</td>
                                    <td>{user.dept_id}</td>
                                    <td>{user.basic_sal}</td>
                                    <td>{user.extra_hours}</td>
                                    <td>{user.bonus}</td>
                                    <td>{user.basic_sal} + {user.bonus} </td>
                                    <td>{user.month}</td>
                                    <td>{user.Year}</td>
                                    <td>{user.paid}</td>
                                    <td>{user.Paid_Date}</td>
                                    
                                    
                                    
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

                                        }}>Edit</Button>
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
                                        title="Are you sure delete this Salary detail?"
                                        onConfirm={() => this.confirm(user.sal_id)}
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
 
export default ViewSalary;