import React, { Component } from 'react';
import EmployeeSideNavBar from './EmployeeSideNavBar';
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

class ViewDeptEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          demp:[],
          selectedDEmployee:{},
          editMode: false,
          emp_id:'',
          dept_id:'',
          from_date:'',
          to_date:'', 
         };
    }

    componentDidMount(){
        //fetching the data from bend
        this.fetchEmpDetails();
    }

    fetchEmpDetails = () =>{
        var url = "http://127.0.0.1:8000/deptEmp-list/";

        axios.get(url).then(res => {
            const demp = res.data;
            this.setState({demp});
        })
        
    }

    showDeleteConfirm = (data) => {
        confirm({
          title: "Are you sure delete this Employee detail?",
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
              description: "You have successfully deleted Department employee " + data,
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
        var url = "http://127.0.0.1:8000/deptEmp-Delete/" + data + "/";
    
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
          description: "You have successfully deleted department employee " + data,
          duration: 0,
        };
        notification.open(args);
      };
    
      cancel = (e) => {
        console.log(e);
        message.error("Canceled deleting Department Employee");
      };

      //EDIT
      editManager(demp){
        console.log("new Employee id:", demp.emp_id);
        var url = "http://127.0.0.1:8000/deptEmp-Update/" + demp.emp_id + "/";
        fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(demp),
    })
    .then((response) => response.json())
    .then((demp) => {
      const newdemp = this.state.demp.map((dempItem) => {
        if (dempItem.emp_id == demp.emp_id) {
          return Object.assign({}, demp);
        } else {
          return dempItem;
        }
      });
      this.setState({ demp: newdemp });
      console.log("object", demp);
    });
  }
    editMode = (demp) => {
      this.setState({ editMode: true });
      this.passID(demp);
      console.log("edit mode in employee: ", demp);
      this.state.demp.filter((item)=>item.emp_id===demp).map((filteredItem)=>this.setState({selectedDEmployee:filteredItem}))
    };

    passID = (demp) => {
      if (this.state.editMode) {
        console.log("true");
      }
    };

    handleSubmit=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

updateData = (e) => {
  e.preventDefault();

  const {dept_id,to_date} = this.state.selectedDEmployee

  const dempUpdateData = {
    dept_id: this.state.dept_id || dept_id,
    to_date: this.state.to_date || to_date,
      

  };

  console.log(dempUpdateData);

  var url= "http://127.0.0.1:8000/deptEmp-Update/" + this.state.selectedDEmployee.emp_id + "/"


  fetch(url,{
    method:"PATCH",
    headers:{
      "Content-type":"application/json"
    },

    body:JSON.stringify(dempUpdateData)

  }).then(response=>this.setState({status:response.status})).catch(err=>console.log(err))


  if(this.state.status=="200"){
    this.fetchEmpDetails()

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
                <h1 style={{color: "DodgerBlue", fontSize: '30px',fontWeight:"bold"}}><center>DEPARTMENT EMPLOYEES</center></h1><br></br><br></br>
            
                <br></br>
                <div>
                    <Button style={{border: "2px solid #008CBA",fontWeight:"bold"}}block ><Link to="/addDeptEmployee" >Add Department Employee</Link></Button>
                </div><br></br>

                <div className="table-responsive"
                 style={{height:450,
                  overflow:"scroll",  
                  }}>
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
                                {this.state.demp.map((demp) =>{
                                    return(
                                    <tr>
                                    <td>{demp.emp_id}</td>
                                    <td>{demp.dept_id}</td>
                                    <td>{demp.from_date}</td>
                                    <td>{demp.to_date}</td>
                                    
                                    
                                    
                                    <td>
                                        <Button type="button"
                                        onClick={()=>this.editMode(demp.emp_id)}
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
                                        onConfirm={() => this.confirm(demp.emp_id)}
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
                                  Department ID : <input type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedDEmployee.dept_id} name="dept_id" id=""/>
                                  To Date : <input type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedDEmployee.to_date} name="to_date" id=""/><br></br>
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
 
export default ViewDeptEmployee;
