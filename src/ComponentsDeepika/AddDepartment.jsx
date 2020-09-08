import React, { Component } from 'react';
import { Card } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import axios from 'axios'

export default class AddDepartment extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                admins:[],
                empId:[],
                admin_id:'AD101',
                dept_id:'CMD001',
                dept_name:'',
                dept_manager_name:''
             }
        }

        componentDidMount(){
            this.fetchAdmins();
            this.fetchAdmins();
        }

        fetchAdmins = () =>{
            axios.get("http://127.0.0.1:8000/admin-list/").then(res=>
            {
                const admins=res.data;
                this.setState({admins});
            }
            )
        }
        fetchEmployee = () => {
            axios.get("http://127.0.0.1:8000/employeeid/").then(res=>
            {
                const empId=res.data;
                this.setState({empId});
            }
            )

        }
        
        formData = (e) => {
            this.setState({ [e.target.name]: e.target.value });
            this.setState({ radstatus: !this.state.radstatus });

            console.log(
                this.state.dept_name,
                this.state.dept_manager_name
            );
            console.log(this.state.radstatus);
            console.log(this.state.event);
        };

        drop = (e) =>{
            this.setState({[e.target.name]:e.target.value})
            console.log(this.state.event)
        }

        onCreateEmp = () => {
            console.log();
        }

        formSubmit = (e) =>{
            e.preventDefault();

            const deptdata ={
                admin_id:this.state.admin_id,
                dept_id:this.state.dept_id,
                dept_name:this.state.dept_name,
                dept_manager_name:this.state.dept_manager_name,
    
            }
    
            console.log(deptdata)
    
            var url = "http://127.0.0.1:8000/department-Create/";
    
            fetch(url,{
                method: 'POST',
                headers:{
                  'Content-type':'application/json',
                },
                body: JSON.stringify(deptdata)
              }).then((response) => {
                alert(response)
              }).catch(function(err){
                alert(err)
              })
    
    
    
            }
       

    render() {
        return (
            <div>
                <div className="row">
                <div className="col-lg-1.5 side" 
                    style={{
                        backgroundColor:"LightBlue",
                        height:"700px"}}>
                    {/*Navigation bar */}
                    <br></br>
                    <EmployeeSideNavBar />
                </div>

                <div className="col main">
                    {/*Middle page components */}
                    <br></br>
                    <h1 
                        style={{
                            color: "DodgerBlue",
                            fontSize: '30px',
                            fontWeight:"bold"}}>
                        <center>ADD DEPARTMENT</center>
                    </h1>
                    <br></br><br></br>
                    <form  onSubmit= {this.formSubmit}
                            style={{
                                fontWeight:"bold"}}
                                >
                    <Card style={{ width: 1000,}}>

                            {/* Admin ID :<select onChange={this.formData} id="admin" name="admin_id" style={{border: "3px solid #ccc",float: "right",width: "68%"}}>
                                        {this.state.admins.map((ad) =>{
                                            const adId = ad.id;
                                            const adName = ad.username;

                                            return(
                                            <option value={ad.id}>{ad.username}</option>
                                            );
                                        })}
                            </select> */}
                            Admin ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="admin_id"></input>
                            <br></br><br></br>
                            Department ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="dept_id"></input><br></br><br></br>
                            Name : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="dept_name" ></input><br></br><br></br>
                            Manager of Department : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="dept_manager_name" ></input><br></br><br></br>
                            
                            {/* Manager of Department : <select onChange={this.formData} id="empid" name="dept_manager_name" style={{border: "3px solid #ccc",float: "right",width: "68%"}} >
                                        {this.state.empId.map((e) =>{
                                            const empid = e.id;
                                            const empName = e.username;

                                            return(
                                            <option value={e.id}>{e.username}</option>
                                            );
                                        })}
                            </select> */}<br></br><br></br>
                        
                    </Card>
                <div>
                <br></br><br></br><br></br>
                    
                <input style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"none",padding:"12px 28px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} type="submit" value="Add supervisor"></input>

                </div>
                </form>
            </div>   
            

        </div>
        </div>
        )
    }
}
