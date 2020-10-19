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
    Select,
    Popconfirm,
    message,
  } from "antd";

  const { confirm } = Modal;

class ViewEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          emp:[],
          selectedEmp:{},
          editMode: false,
          emp_det_id:"",
          ename:"",
          phone:"",
          secondary_phone:"",
          position:"",
          address:"",
          email:"",
          qualification:"",
          trained_years:"",
          dob:"",
          gender:"",
          permenent:"",
          joined_date:"",
       };
    }

    componentDidMount(){
        //fetching the data from bend
        this.fetchEmpDetails();
    }

    fetchEmpDetails = () =>{
        var url = "http://127.0.0.1:8000/EmployeeDetail-list/";
        axios.get(url).then(res => {
            const emp = res.data;
            this.setState({emp});
        });    
    };

    showDeleteConfirm = (data) => {
        confirm({
          title: "Are you sure delete this Employee?",
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
              description: "You have successfully deleted Employee " + data,
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
        var url = "http://127.0.0.1:8000/EmployeeDetail-Delete/" + data + "/";
    
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
          description: "You have successfully deleted Employee " + data,
          duration: 0,
        };
        notification.open(args);
      };
    
      cancel = (e) => {
        console.log(e);
        message.error("Canceled deleting Employee");
      };

      //EDIT
      editEmployee(emp) {
        console.log("new Employee id:", emp.emp_det_id);
        var url = "http://127.0.0.1:8000/EmployeeDetail-Update/" + emp.emp_det_id + "/";
        fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(emp),
        })
          .then((response) => response.json())
          .then((emp) => {
            const newemp = this.state.emp.map((empItem) => {
              if (empItem.emp_det_id == emp.emp_det_id) {
                return Object.assign({}, emp);
              } else {
                return empItem;
              }
            });
            this.setState({ emp: newemp });
            console.log("object", emp);
          });
      }
      editMode = (emp) => {
        this.setState({ editMode: true });
        this.passID(emp);
        console.log("edit mode in Employee: ", emp);
        this.state.emp.filter((item)=>item.emp_det_id===emp).map((filteredItem)=>this.setState({selectedEmp:filteredItem}))
      };
    
      passID = (emp) => {
        if (this.state.editMode) {
          console.log("true");
        }
      };

      //UPDATE
    
      handleSubmit=(e)=>{
        this.setState({[e.target.name]:e.target.value})
      }
    
      updateData = (e) => {
          e.preventDefault();
      
          const {employee_name,primary_phone,secondary_phone,position,address,trained_years,email,permenent} = this.state.selectedEmp
      
          const empUpdateData = {
            employee_name: this.state.ename || employee_name,
            primary_phone: this.state.phone || primary_phone,
            secondary_phone: this.state.secondary_phone || secondary_phone,
            position: this.state.position || position,
            address: this.state.address || address,
            trained_years: this.state.trained_years || trained_years,
            email: this.state.email || email,
            permenent: this.state.permenent || permenent,
              
      
          };
    
          console.log(empUpdateData);
          var url= "http://127.0.0.1:8000/EmployeeDetail-Update/" + this.state.selectedEmp.emp_det_id + "/"
      
      
          fetch(url,{
            method:"PATCH",
            headers:{
              "Content-type":"application/json"
            },
      
            body:JSON.stringify(empUpdateData)
      
          }).then(response=>this.setState({status:response.status})).catch(err=>console.log(err))
      
      
          if(this.state.status=="200"){
            this.fetchEmpDetails()
      
            window.location.reload(true)
          }
    }

    render() { 
        return ( 
                <div className="row">
                    
                    <div className="col-lg-1.5 side" style={{backgroundColor:"LightBlue", height:"650px"}}>
                        {/*Navigation bar */}
                        <br></br>
                        <EmployeeSideNavBar />
                    </div>
          
                    <div className="col main1" style={{height:"100%"}}>
          
                        <br></br>
                        <h1 style={{color: "DodgerBlue", fontSize: '30px',fontWeight:"bold"}}><center>EMPLOYEE DETAILS</center></h1><br></br><br></br>
                        <div>
                        <Button style={{border: "2px solid #008CBA",fontWeight:"bold"}}block ><Link to="/addEmployee" >Add Employee</Link></Button>
                        </div>
                        <br></br>

                        <div>
                            <div className="table-responsive"
                            style={{height:450,
                              width:1090,
                              overflow:"scroll",  
                              }}>
                            <table className="table" style={{fontSize:"10px"}}>
                                <thead className="theads">
                                <tr>
                                    <th>Employee ID</th>
                                    <th>Employee Name</th>
                                    <th>Admin ID</th>
                                    <th>Primary Phone</th>
                                    <th>Secondary Phone</th>
                                    <th>Position</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                    <th>Trained Years</th>
                                    <th>Date of Birth</th>
                                    <th>Joined Date</th>
                                    <th>Permanent</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    
                                    
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.emp.map(emp =>{
                                    return(
                                    <tr>
                                    <td>{emp.emp_det_id}</td>
                                    <td>{emp.employee_name}</td>
                                    <td>{emp.admin_id}</td>
                                    <td>{emp.primary_phone}</td>
                                    <td>{emp.secondary_phone}</td>
                                    <td>{emp.position}</td>
                                    <td>{emp.address}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.trained_years}</td>
                                    <td>{emp.dob}</td>
                                    <td>{emp.joined_date}</td>
                                    <td>{emp.permenent}</td>
                                    
                                    
                                    <td>
                                        <Button type="button"
                                        className="btn btn-primary"
                                        onClick={()=>this.editMode(emp.emp_det_id)}
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"                              
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
                                        title="Are you sure delete this Employee?"
                                        onConfirm={() => this.confirm(emp.emp_det_id)}
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
                    <div
                      className="modal fade"
                      id="exampleModalCenter"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                          <div className="modal-headers">
                            <br></br>
                            <center><h5 className="modal-title" id="exampleModalLongTitle">
                              Update Employee Details
                            </h5></center> 
                          </div>
                          <div className="modal-body">{this.passID()}
                          
                          <form onSubmit={this.updateData}>
                            Employee Name : <input type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedEmp.employee_name} name="ename" id=""/>
                            Primary phone number : <input type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedEmp.primary_phone} name="phone" id=""/>
                            Secondary phone number : <input type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedEmp.secondary_phone} name="secondary_phone" id=""/>
                            Address : <input type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedEmp.address} name="address" id=""/>
                            Trained years : <input type="number" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedEmp.trained_years} name="trained_years" id=""/><br></br>
                            Email : <input type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedEmp.email} name="email" id=""/>
                            Permanent : <input type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedEmp.permenent} name="permenent" id=""/><br></br>
                            <br></br>
                            <center>
                            <button
                              type="submit" 
                              className="btn btn-primary"
                              style={{
                                color:"white",
                                padding:"5px 10px",
                                fontSize:"10px",
                                fontWeight:"bold",
                                cursor:"pointer",
                                backgroundColor:"white",
                                color:"black",
                                border:"2px solid blue",
                              }}
                              >
                              Update
                            </button>
                            </center>

                          </form>
                          </div>
                          <div className="modal-footer">
                          
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            style={{
                              color:"white",
                              padding:"5px 10px",
                              fontSize:"10px",
                              fontWeight:"bold",
                              cursor:"pointer",
                              backgroundColor:"white",
                              color:"black",
                              border:"2px solid red",
                            }}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
      );
    }
}
export default ViewEmployee;