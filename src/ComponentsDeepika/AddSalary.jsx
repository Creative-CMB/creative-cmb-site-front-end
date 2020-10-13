import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';

export default class AddSalary extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                sal_id:'',
                emp_det_id:'',
                dept_id:'',
                basic_sal:'Non-Paid',
                extra_hours:'0',
                bonus:'',
                month:'',
                year:'',
                paid:'',
                Paid_Date:''
             }
        }
        
        
        formData = (e) => {
            this.setState({ [e.target.name]: e.target.value });
            this.setState({ radstatus: !this.state.radstatus });

            console.log(
                this.state.emp_det_id,
                this.state.month,
                
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
        };

        formSubmit  = (e) =>{
            e.preventDefault();
        

        const salData ={
            sal_id:this.state.sal_id,
                emp_det_id:this.state.emp_det_id,
                dept_id:this.state.dept_id,
                basic_sal:this.state.basic_sal,
                extra_hours:this.state.extra_hours,
                bonus:this.state.bonus,
                month:this.state.month,
                year:this.state.year,
                paid:this.state.paid,
                Paid_Date:this.state.Paid_Date,

        };

        console.log(salData)

        var url = "http://127.0.0.1:8000/Salary-Create/";

        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(salData)

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
                        fontWeight:"bold"}}
                        ><center>ADD SALARY DETAILS</center>
                </h1>
                <br></br><br></br>

                <form onSubmit= {this.formSubmit}
                            style={{
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
                        

                        Salary ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="sal_id" ></input><br></br><br></br>
                        Employee ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="emp_det_id" ></input><br></br><br></br>
                        Department ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text"onChange= {this.formData} name="dept_id"></input><br></br><br></br><br></br>
                        Basic Salary : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange={this.formData} name="basic_sal"></input><br></br><br></br>
                        Extra Hours : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange={this.formData} name="extra_hours"></input><br></br><br></br><br></br>
                        
                    </Card>
                </Col>
                <Col span={12}>

                    <Card >
                        
                        
                        Bonus : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange={this.formData} name="bonus"></input><br></br><br></br>
                        Month : <select id="month"style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}}onChange= {this.formData} name="month">
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
                        Year : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" maxLength="4" onChange= {this.formData} name="year"></input><br></br><br></br>
                        Date : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="date" onChange= {this.formData} name="Paid_Date"></input><br></br>  <br></br>         
                        Paid : <select id="Paid" style={{border: "3px solid #ccc",float: "right",width: "68%",height:42}} onChange= {this.formData} name="paid" >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        </select><br></br><br></br><br></br><br></br>
                    
                        
                    </Card>
                </Col>
                </Row>
            </div>
            <br></br><br></br>
            <div>

                <input style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"none",padding:"12px 28px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} type="submit" value="Add salary detail"></input>
                </div>
            </form>
            
                </div>
            </div>
            </div>
        )
    }
}
