import React, { Component } from 'react';
import { Card } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import axios from 'axios';

export default class AddDeptEmployee extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                empId:[],
                deptId:[],
                emp_id:'',
                dept_id:'',
                from_date:'',
                to_date:''                
             }
        }
        
        componentDidMount(){
            this.fetchAdmins();
        }

        fetchAdmins = () =>{
            axios.get("http://127.0.0.1:8000/admin-list/").then(res=>
            {
                const admins=res.data;
                this.setState({admins});
            })
        }

       
        formData = (e) => {
            this.setState({ [e.target.name]: e.target.value });
            this.setState({ radstatus: !this.state.radstatus });

            console.log(
                this.state.emp_id,
                this.state.dept_id, 
                this.state.from_date,
            );
            console.log(this.state.radstatus);
            console.log(this.state.event);
        };

        drop = (e) =>{
            this.setState({[e.target.name]:e.target.value})
            console.log(this.state.event)
        }

        onCreateDeptEmp = () => {
            console.log();
        };

        formSubmit  = (e) =>{
            e.preventDefault();
        

        const dempData ={
            emp_id : this.state.emp_id,
            dept_id : this.state.dept_id,
            from_date : this.state.from_date,
            to_date : this.state.to_date,
        };

        console.log(dempData)

        var url = "http://127.0.0.1:8000/deptEmp-Create/";

        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(dempData)

        }).then((response)=>{
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
                        height:"700px"}}
                        >
                    {/*Navigation bar */}
                    <br></br>
                    <EmployeeSideNavBar />
                </div>

                <div className="col main">
                {/*Middle page components */}
                <br></br>
                    <h1 style={{color: "DodgerBlue", fontSize: '30px', fontWeight:"bold"}}><center>ADD EMPLOYEES FOR DEPARTMENTS</center></h1><br></br><br></br><br></br><br></br>
                    <form   
                            style={{ 
                                fontSize: '15px',
                                fontWeight:"bold"}}
                                >   
                    <Card style={{ width: 600 }}>

                        
                            Employee ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="emp_id"></input><br></br><br></br>
                            Department ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="dept_id" ></input><br></br><br></br>
                            From : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="date"onChange= {this.formData} name="from_date"></input><br></br><br></br>
                            To : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="date"  onChange= {this.formData} name="to_date"></input><br></br><br></br>
                        
                    </Card>
                    </form>
                <div>
                <br></br><br></br><br></br><br></br>

                <input style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"none",padding:"12px 28px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} type="submit" value="Add Employee"></input>
                </div>
                </div>    
            </div>
            </div>
        )
    }
}
