import React, { Component } from 'react';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import { Input } from 'antd';
import { Button } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';


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

    delete = (id) =>{
        var url = "http://127.0.0.1:8000/deptSupervisor-Delete/" + id + "/";
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
                <h1 style={{color: "DodgerBlue", fontSize: '30px',fontWeight:"bold"}}><center>DEPARTMENT EMPLOYEES</center></h1><br></br><br></br>
                <div style={{alignItems:"center"}}>
                <Search
                    placeholder="Search by ID"
                    enterButton="Search"
                    size="large"
                    
                    onSearch={value => console.log(value)}
                ></Search>
                </div>
                <br></br>
                <div>
                    <Button style={{border: "2px solid #008CBA",fontWeight:"bold"}}block ><Link to="/addDeptSupervisor" >Add Department Supervisor/</Link></Button>
                </div>

                <div className="table-responsive">
                            <table className="table" style={{fontSize:"10px"}}>
                                <thead className="thead">
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
                                        <Button type="button" onClick={() => this.delete(user.emp_id)} className="btn btn-danger"
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
 
export default ViewDeptSupervisors;
