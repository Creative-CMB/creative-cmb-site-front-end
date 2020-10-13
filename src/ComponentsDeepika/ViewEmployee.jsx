import React, { Component } from 'react';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import { Input } from 'antd';
import { Button } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const { Search } = Input;

class ViewEmployee extends Component {
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
        var url = "http://127.0.0.1:8000/EmployeeDetail-list/";

        axios.get(url).then(res => {
            const data = res.data;
            this.setState({data});
        })
        
    }

    delete = (id) =>{
        var url = "http://127.0.0.1:8000/EmployeeDetail-Delete/" + id + "/";
        fetch(url,{
            method:"DELETE",
            headers:{
                'Content-type':'application/json',
            },
        }).then((response) => {
            this.fetchEmpDetails()
        }).catch(err => console.log(err))
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
                        <h1 style={{color: "DodgerBlue", fontSize: '30px',fontWeight:"bold"}}><center>EMPLOYEE DETAILS</center></h1><br></br><br></br>
                        
                    
                        <br></br>
                        <div>
                        <Button style={{border: "2px solid #008CBA",fontWeight:"bold"}}block ><Link to="/addEmployee" >Add Employee</Link></Button>
                        </div>
                        <br></br>

                        <div>
                            <div className="table-responsive">
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
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    
                                    
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.data.map(user =>{
                                    return(
                                    <tr>
                                    <td>{user.emp_det_id}</td>
                                    <td>{user.employee_name}</td>
                                    <td>{user.admin_id}</td>
                                    <td>{user.primary_phone}</td>
                                    <td>{user.secondary_phone}</td>
                                    <td>{user.position}</td>
                                    <td>{user.address}</td>
                                    <td>{user.email}</td>
                                    <td>{user.trained_years}</td>
                                    <td>{user.dob}</td>
                                    <td>{user.joined_date}</td>
                                    
                                    
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
                                        <Button type="button" onClick={() => this.delete(user.emp_det_id)} className="btn btn-danger"
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
                                        Delete
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
          
                </div>
         );
    }
}
export default ViewEmployee;