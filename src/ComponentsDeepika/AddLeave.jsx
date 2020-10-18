import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';

export default class AddLeave extends Component {

        constructor(props) {
            super(props);
            this.state = { 
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
        
        formData = (e) => {
            this.setState({ [e.target.name]: e.target.value });
            this.setState({ radstatus: !this.state.radstatus });

            console.log(
                this.state.leave_id,
                this.state.dept_id, 
                this.state.year,
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
        

        const leaveData ={
            leave_id:this.state.leave_id,
            employee_id:this.state.employee_id,
            dept_id:this.state.dept_id,
            leave_type:this.state.leave_type,
            month:this.state.month,
            year:this.state.year,
            date:this.state.date,
            reason:this.state.reason,
            status:this.state.status
        };

        console.log(leaveData)

        var url = "http://127.0.0.1:8000/Leave-Create/";

        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(leaveData)

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
                <h1 
                    style={{
                        color: "DodgerBlue",
                        fontSize: '30px',
                        fontWeight:"bold"}
                        }><center>ADD LEAVES</center>
                </h1>
                <br></br><br></br>
                    <form onSubmit= {this.formSubmit} 
                            style={{
                                fontSize: '15px',
                                fontWeight:"bold"}}
                                >
<div    
                    style={{ 
                        padding: "30px",
                        background: "#ececec"}}

                        >
                <Row gutter={50}>
                <Col span={12}>
                    <Card >
                    Leave ID : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="leave_id" ></input><br></br><br></br>
                    Employee ID : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="employee_id" ></input><br></br><br></br>
                    Department ID : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text"onChange= {this.formData} name="dept_id"></input><br></br><br></br><br></br>
                    Leave Type :  <select required id ="leavetype" style={{border: "3px solid #ccc",float: "right",width: "68%",height:45}}onChange={this.formData}name="leave_type"  >
                                <option value="Paid">Paid</option>
                                <option value="Non-Paid">Non-paid</option>
                                </select><br></br><br></br>
                    Month : <select required id="month" style={{border: "3px solid #ccc",float: "right",width: "68%",height:45}}onChange={this.formData} name="month"  >
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                                </select><br></br><br></br>
                    
                    </Card>
                </Col>
                <Col span={12}>
                    <Card >
                       
                       
                        Year : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" maxLength="4" onChange= {this.formData} name="year"></input><br></br><br></br>
                        Date : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="date" onChange= {this.formData} name="date"></input><br></br><br></br>
                        Reason : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="reason"></input><br></br><br></br>
                        Status : <select required id= "status" style={{border: "3px solid #ccc",float: "right",width: "68%",height:45}}onChange={this.formData} name="status" >
                                <option value="Accepted">Accepted</option>
                                <option value="Pending">Pending</option>
                                <option value="Canceled">Canceled</option>
                                </select><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    
                        
                    </Card>
                </Col>
                </Row>
                <div>
            <br></br><br></br>

                <input style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"none",padding:"12px 28px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} type="submit" value="Add Leave"></input>
                </div>
                </div>
                </form>
            
            
                </div>
            </div>
            </div>
        )
    }
}
