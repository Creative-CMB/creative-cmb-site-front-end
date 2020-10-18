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

class ViewSalary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sal:[],
            selectedSalary:{},
            editMode: false,
            sal_id:'',
            emp_det_id:'',
            dept_id:'',
            basic_sal:'',
            extra_hours:'',
            bonus:'',
            month:'',
            year:'',
            paid:'',
            Paid_Date:''
         }
    }


    componentDidMount(){
        //fetching the data from bend
        this.fetchEmpDetails();
    }

    fetchEmpDetails = () =>{
        var url = "http://127.0.0.1:8000/Salary-list/";
        axios.get(url).then(res => {
            const sal = res.data;
            this.setState({sal});
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

      //EDIT
      editManager(sal){
        console.log("new salary id:", sal.sal_id);
        var url = "http://127.0.0.1:8000/Salary-Update/" +  sal.sal_id + "/";
        fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(sal),
    })
    .then((response) => response.json())
    .then((sal) => {
      const newsal= this.state.sal.map((salItem) => {
        if (salItem.sal_id == sal.sal_id) {
          return Object.assign({}, sal);
        } else {
          return salItem;
        }
      });
      this.setState({ sal: newsal });
      console.log("object", sal);
    });
  }
    editMode = (sal) => {
      this.setState({ editMode: true });
      this.passID(sal);
      console.log("edit mode in salary: ", sal);
      this.state.sal.filter((item)=>item.sal_id===sal).map((filteredItem)=>this.setState({selectedSalary:filteredItem}))
    };

    passID = (sal) => {
      if (this.state.editMode) {
        console.log("true");
      }
    };

    handleSubmit=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

updateData = (e) => {
  e.preventDefault();

  const {paid,Paid_Date} = this.state.selectedSalary

  const salUpdateData = {
    paid: this.state.paid || paid,
    Paid_Date: this.state.Paid_Date || Paid_Date,
      

  };

  console.log(salUpdateData);

  var url= "http://127.0.0.1:8000/Salary-Update/" + this.state.selectedSalary.sal_id + "/"


  fetch("http://127.0.0.1:8000/Salary-Update/" + this.state.selectedSalary.sal_id + "/"
  ,{
    method:"PATCH",
    headers:{
      "Content-type":"application/json"
    },

    body:JSON.stringify(salUpdateData)

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
                <h1 style={{color: "DodgerBlue", fontSize: '30px',fontWeight:"bold"}}><center>SALARY DETAILS</center></h1><br></br><br></br>
                
                <br></br>
                <div>
                    <Button style={{border: "2px solid #008CBA",fontWeight:"bold"}}block ><Link to="/addSalary" >Add Salary</Link></Button>
                </div><br></br>

                <div className="table-responsive"
                style={{height:450,
                  overflow:"scroll",  
                  }}>
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
                                {this.state.sal.map(sal =>{
                                    return(
                                    <tr>
                                    <td>{sal.sal_id}</td>
                                    <td>{sal.emp_det_id}</td>
                                    <td>{sal.dept_id}</td>
                                    <td>{sal.basic_sal}</td>
                                    <td>{sal.extra_hours}</td>
                                    <td>{sal.bonus}</td>
                                    <td>{sal.basic_sal} + {sal.bonus} </td>
                                    <td>{sal.month}</td>
                                    <td>{sal.Year}</td>
                                    <td>{sal.paid}</td>
                                    <td>{sal.Paid_Date}</td>
                                    
                                    
                                    
                                    <td>
                                        <Button type="button"
                                        onClick={()=>this.editMode(sal.sal_id)}
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
                                        onConfirm={() => this.confirm(sal.sal_id)}
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
                                <center>Update Salary Details</center> 
                                </h5>
                                </center>
                              </div>
                              <div class="modal-body">{this.passID()}
                              
                              <form onSubmit={this.updateData}>
                                  Paid : <select type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedSalary.paid} id="" name="paid" >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        </select>
                                Paid Date : <input type="date" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedSalary.Paid_Date} id=""name="Paid_Date"></input><br></br>
                                  
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
 
export default ViewSalary;