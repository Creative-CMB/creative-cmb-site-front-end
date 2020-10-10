import React, { Component } from 'react';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import { Input } from 'antd';
import { Button } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const { Search } = Input;

class ViewLeave extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            data:[]
        }
    }

    componentDidMount(){
        //fetching the data from bend

        this.fetchLeave();
    }

    fetchLeave = () =>{
        var url = "http://127.0.0.1:8000/Leave-list/";

        axios.get(url).then(res => {
            const data = res.data;
            this.setState({data});
        })
        
    }
    
    delete = (id) =>{
        var url = "http://127.0.0.1:8000/Leave-Delete/" + id + "/";
        fetch(url,{
            method:"DELETE",
            headers:{
                'Content-type':'application/json',
            },
        }).then((response) => {
            this.fetchLeave()
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
                <h1 style={{color: "DodgerBlue", fontSize: '30px',fontWeight:"bold"}}><center>LEAVE DETAILS</center></h1><br></br><br></br>
            
                <br></br>
                <div>
                    <Button style={{border: "2px solid #008CBA",fontWeight:"bold"}}block ><Link to="/addLeave" >Add Leave</Link></Button>
                </div><br></br>

                <div className="table-responsive">
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
                                {this.state.data.map(user =>{
                                    return(
                                    <tr>
                                    <td>{user.leave_id}</td>
                                    <td>{user.emp_det_id}</td>
                                    <td>{user.dept_id}</td>
                                    <td>{user.leave_type}</td>
                                    <td>{user.month}</td>
                                    <td>{user.year}</td>
                                    <td>{user.date}</td>
                                    <td>{user.reason}</td>
                                    <td>{user.status}</td>
                                    
                                    
                                    
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
                                        <Button onClick={() => this.delete(user.leave_id)} type="button" className="btn btn-danger"
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
         );
    }
}
 
export default ViewLeave;
