import React, { Component } from 'react';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import { Input } from 'antd';
import { Button } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

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


    delete = (id) =>{
        var url = "http://127.0.0.1:8000/Salary-Delete/" + id + "/";
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
                                        <Button type="button" onClick={() => this.delete(user.sal_id)} className="btn btn-danger"
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
 
export default ViewSalary;