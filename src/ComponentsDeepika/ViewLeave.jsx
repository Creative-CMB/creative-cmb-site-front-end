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
    Popconfirm,
    message,
  } from "antd";

const { confirm } = Modal;

class ViewLeave extends Component {
    constructor(props) {
        super(props);
        this.state = {  
          leave:[],
          selectedLeave:{},
          editMode: false,
          leave_id:'',
          employee_id:'',
          dept_id:'',
          leave_type:'',
          month:'',
          year:'',
          date:'',
          reason:'',
          status:'',
        }
    }

    componentDidMount(){
        //fetching the data from bend
        this.fetchLeave();
    }

    fetchLeave = () =>{
        var url = "http://127.0.0.1:8000/Leave-list/";
        axios.get(url).then(res => {
            const leave = res.data;
            this.setState({leave});
        })
        
    }
    
    showDeleteConfirm = (data) => {
        confirm({
          title: "Are you sure delete this Leave detail?",
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
              description: "You have successfully deleted Leave detail " + data,
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
        var url = "http://127.0.0.1:8000/Leave-Delete/" + data + "/";
    
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
          description: "You have successfully deleted leave detail " + data,
          duration: 0,
        };
        notification.open(args);
      };
    
      cancel = (e) => {
        console.log(e);
        message.error("Canceled deleting Leave detail");
      };

      //EDIT
      editManager(leave){
        console.log("new Leave id:", leave.leave_id);
        var url = "http://127.0.0.1:8000/Leave-Update/" + leave.leave_id + "/";
        fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(leave),
    })
    .then((response) => response.json())
    .then((leave) => {
      const newleave= this.state.leave.map((leaveItem) => {
        if (leaveItem.emp_id == leave.emp_id) {
          return Object.assign({}, leave);
        } else {
          return leaveItem;
        }
      });
      this.setState({ leave: newleave });
      console.log("object", leave);
    });
  }
    editMode = (leave) => {
      this.setState({ editMode: true });
      this.passID(leave);
      console.log("edit mode in leaver: ", leave);
      this.state.leave.filter((item)=>item.leave_id===leave).map((filteredItem)=>this.setState({selectedLeave:filteredItem}))
    };

    passID = (leave) => {
      if (this.state.editMode) {
        console.log("true");
      }
    };

    handleSubmit=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

updateData = (e) => {
  e.preventDefault();

  const {leave_type,status} = this.state.selectedLeave

  const leaveUpdateData = {
    leave_type: this.state.leave_type || leave_type,
    status: this.state.status || status,
      

  };

  console.log(leaveUpdateData);

  var url= "http://127.0.0.1:8000/Leave-Update/" + this.state.selectedLeave.leave_id + "/"


  fetch(url,{
    method:"PATCH",
    headers:{
      "Content-type":"application/json"
    },

    body:JSON.stringify(leaveUpdateData)

  }).then(response=>this.setState({status:response.status})).catch(err=>console.log(err))


  if(this.state.status=="200"){
    this.fetchLeave()

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
                <h1 style={{color: "DodgerBlue", fontSize: '30px',fontWeight:"bold"}}><center>LEAVE DETAILS</center></h1><br></br><br></br>
            
                <br></br>
                <div>
                    <Button style={{border: "2px solid #008CBA",fontWeight:"bold"}}block ><Link to="/addLeave" >Add Leave</Link></Button>
                </div><br></br>

                <div className="table-responsive"
                style={{height:450,
                  overflow:"scroll",  
                  }}>
                            <table className="table" style={{fontSize:"10px"}}>
                                <thead className="theads">
                                <tr>
                                    <th>Leave ID</th>
                                    <th>Employee ID</th>
                                    <th>Department ID</th>
                                    <th>Leave Type</th>
                                    <th>Month</th>
                                    <th>Year</th>
                                    <th>Date</th>
                                    <th>Reason</th>
                                    <th>Status</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    
                                    
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.leave.map(leave =>{
                                    return(
                                    <tr>
                                    <td>{leave.leave_id}</td>
                                    <td>{leave.emp_det_id}</td>
                                    <td>{leave.dept_id}</td>
                                    <td>{leave.leave_type}</td>
                                    <td>{leave.month}</td>
                                    <td>{leave.year}</td>
                                    <td>{leave.date}</td>
                                    <td>{leave.reason}</td>
                                    <td>{leave.status}</td>
                                    
                                    
                                    
                                    <td>
                                        <Button type="button"
                                        onClick={()=>this.editMode(leave.leave_id)}
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
                                        title="Are you sure delete this Leave detail?"
                                        onConfirm={() => this.confirm(leave.leave_id)}
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
                                <center>Update Leave Details</center> 
                                </h5>
                                </center>
                              </div>
                              <div class="modal-body">{this.passID()}
                              
                              <form onSubmit={this.updateData}>
                                  Leave Type :  <select type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedLeave.leave_type} name="leave_type" id=""  >
                                                  <option value="Paid">Paid</option>
                                                  <option value="Non-Paid">Non-paid</option>
                                                </select>
                                  Status : <select type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedLeave.status} name="status" id="" >
                                                  <option value="Accepted">Accepted</option>
                                                  <option value="Pending">Pending</option>
                                                  <option value="Canceled">Canceled</option>
                                                </select>
                                  
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
 
export default ViewLeave;
