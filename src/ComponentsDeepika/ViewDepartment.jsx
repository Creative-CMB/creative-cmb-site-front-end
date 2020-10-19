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
    Popconfirm,
    message,
  } from "antd";

  const { confirm } = Modal;


class ViewDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            department:[],
            selectedDept:{},
            editMode: false,
            admin_id:'',
            dept_id:'',
            dept_name:'',
            dept_manager_name:'',
            
         };
    }

    componentDidMount(){
        //fetching the data from bend
        this.fetchDepartment();
    }

    fetchDepartment = () =>{
        var url = "http://127.0.0.1:8000/department-list/";

        axios.get(url).then(res => {
            const department = res.data;
            this.setState({department});
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


      //EDIT
      editManager(department){
        console.log("new Employee id:", department.dept_id);
        var url = "http://127.0.0.1:8000/department-Update/" + department.dept_id + "/";
        fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(department),
    })
    .then((response) => response.json())
    .then((department) => {
      const newdepartment = this.state.department.map((departmentItem) => {
        if (departmentItem.dept_id == department.dept_id) {
          return Object.assign({}, department);
        } else {
          return departmentItem;
        }
      });
      this.setState({ department: newdepartment });
      console.log("object", department);
    });
  }
    editMode = (department) => {
      this.setState({ editMode: true });
      this.passID(department);
      console.log("edit mode in department: ", department);
      this.state.department.filter((item)=>item.dept_id===department).map((filteredItem)=>this.setState({selectedDept:filteredItem}))
    };

    passID = (Employee) => {
      if (this.state.editMode) {
        console.log("true");
      }
    };

    handleSubmit=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

updateData = (e) => {
  e.preventDefault();

  const {dept_name,dept_manager_name} = this.state.selectedDept

  const departmentUpdateData = {
    dept_name: this.state.dept_name || dept_name,
    dept_manager_name: this.state.dept_manager_name || dept_manager_name,
      

  };

  console.log(departmentUpdateData);

  var url= "http://127.0.0.1:8000/department-Update/" + this.state.selectedDept.dept_id + "/"


  fetch(url,{
    method:"PATCH",
    headers:{
      "Content-type":"application/json"
    },

    body:JSON.stringify(departmentUpdateData)

  }).then(response=>this.setState({status:response.status})).catch(err=>console.log(err))


  if(this.state.status=="200"){
    this.fetchDepartment()

    window.location.reload(true)
  }
}
      


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


                        <div className="table-responsive"
                        style={{height:450,
                          overflow:"scroll",  
                          }}>
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
                                {this.state.department.map((department) =>{
                                    return(
                                    <tr>
                                    <td>{department.dept_id}</td>
                                    <td>{department.admin_id}</td>
                                    <td>{department.dept_name}</td>
                                    <td>{department.dept_manager_name}</td>
                                    
                                     <td>
                                        <Button type="button"  onClick={()=>this.editMode(department.dept_id)}
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
                                        title="Are you sure delete this Department?"
                                        onConfirm={() => this.confirm(department.dept_id)}
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
                          class="modal fade"
                          id="exampleModalCenter"
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalCenterTitle"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                              <div class="modal-headers">
                                <br></br>
                                <center><h5 class="modal-title" id="exampleModalLongTitles">
                                <center>Update Employee</center> 
                                </h5>
                                </center>
                              </div>
                              <div class="modal-body">{this.passID()}
                              
                              <form onSubmit={this.updateData}>
                                  Department Name : <input type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedDept.dept_name} name="dept_name" id=""/>
                                  Manager name : <input type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedDept.dept_manager_name} name="dept_manager_name" id=""/><br></br>
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
                              <div class="modal-footer">
                              
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
  
        
         );
    }
}
 
export default ViewDepartment;
