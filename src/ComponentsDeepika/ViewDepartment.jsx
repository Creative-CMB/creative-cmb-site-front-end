import React, { Component } from 'react';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import { Input } from 'antd';
import { Button } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const { Search } = Input;

class ViewDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
    }

    componentDidMount(){
        //fetching the data from bend

        this.fetchDepartment();
    }

    fetchDepartment = () =>{
        var url = "http://127.0.0.1:8000/department-list/";

        axios.get(url).then(res => {
            const data = res.data;
            this.setState({data});
        })
        
    }

    deletedept = (id) =>{
        var url 
        url = "http://127.0.0.1:8000/department-Delete/" + id + "/";
        fetch(url,{
            method:"DELETE",
            headers:{
                'Content-type':'application/json',
            },
        }).then((response) => {
            this.fetchDepartment()
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
                <h1 style={{color: "DodgerBlue", fontSize: '30px',fontWeight:"bold"}}><center>DEPARTMENT</center></h1><br></br><br></br>
                {/*Search Bar */}
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
                    <Button style={{border: "2px solid #008CBA",fontWeight:"bold"}}block ><Link to="/addDepartment" >Add Department</Link></Button>
                </div>


                        <div className="table-responsive">
                            <table className="table" style={{fontSize:"13px"}}>
                                <thead className="thead">
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
                                {this.state.data.map(user =>{
                                    return(
                                    <tr>
                                    <td>{user.dept_id}</td>
                                    <td>{user.admin_id}</td>
                                    <td>{user.dept_name}</td>
                                    <td>{user.dept_manager_name}</td>
                                    
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
                                        <Button type="button"  onClick={() => this.deletedept(user.dept_id)} className="btn btn-danger"
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
 
export default ViewDepartment;