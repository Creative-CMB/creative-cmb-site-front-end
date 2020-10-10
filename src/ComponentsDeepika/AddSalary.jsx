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
                year:'2021',
                paid:'',
                Paid_Date:''
             }
        }
        
        
        formData = (event) => {
            this.setState({
                [event.target.name]: event.target.value
                
            })

            this.setState({
                condition: !this.state.condition
            })

            console.log(this.state.name, this.state.model, this.state.condition)
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

                <div 
                    style={{
                        padding: "30px",
                        background: "#ececec"}}
                        >
                <Row gutter={50}>
                <Col span={12}>
                    <Card >
                        <form 
                            style={{
                                fontWeight:"bold"}}
                                >

                        Salary ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="sal_id" ></input><br></br><br></br>
                        Employee ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="emp_det_id" ></input><br></br><br></br>
                        Department ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text"onChange= {this.formData} name="dept_id"></input><br></br><br></br><br></br>
                        Basic Salary : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange={this.formData} name="basic_sal"></input><br></br><br></br>
                        Extra Hours : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange={this.formData} name="extra_hours"></input><br></br><br></br><br></br>
                        </form>
                    </Card>
                </Col>
                <Col span={12}>

                    <Card >
                        <form 
                            style={{
                                fontWeight:"bold"}}
                                >
                        
                        Bonus : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange={this.formData} name="bonus"></input><br></br><br></br>
                        Month : <select style={{border: "3px solid #ccc",float: "right",width: "68%"}} >
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
                        Year : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" maxLength="4" onChange= {this.formData} name="year"></input><br></br><br></br>
                        Date : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="date" onChange= {this.formData} name="Paid_Date"></input><br></br>  <br></br>         
                        Paid : <select style={{border: "3px solid #ccc",float: "right",width: "68%"}} >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        </select><br></br><br></br><br></br><br></br>
                    
                        </form>
                    </Card>
                </Col>
                </Row>
            </div>
            <br></br><br></br>
            <div>

                <input style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"none",padding:"12px 28px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} type="submit" value="Add salary detail"></input>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
