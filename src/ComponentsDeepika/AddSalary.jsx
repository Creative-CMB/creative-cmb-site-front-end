import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';

export default class AddSalary extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                Salary_ID:'',
                Employee_Name:'',
                Dept_Name:'',
                Basic_Salary:'Non-Paid',
                Extra_Hours:'0',
                Bonus:'',
                Month:'',
                Year:'2021',
                Paid:false,
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
                

                <div className="col-lg-1.5 side">
                    {/*Navigation bar */}
                    <EmployeeSideNavBar />
                </div>

                <div className="col main">
  
                    {/*Middle page components */}
                <h1 style={{color: "DodgerBlue", fontSize: '30px',fontWeight:"bold"}}><center>ADD SALARY DETAILS</center></h1><br></br>
                <div style={{ padding: "30px",background: "#ececec"}}>
                <Row gutter={50}>
                <Col span={12}>
                    <Card >
                    <form style={{fontWeight:"bold"}}>
                    Salary ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="Salary_ID"></input><br></br><br></br>
                    Employee Name : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="Employee_Name" ></input><br></br><br></br>
                    Department Name : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text"onChange= {this.formData} name="Dept_Name"></input><br></br><br></br><br></br>
                    Basic Salary : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange={this.formData} name="Basic_Salary"></input><br></br><br></br>
                    Extra Hours : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange={this.formData} name="Extra_Hours"></input><br></br><br></br>
                    </form>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card >
                        <form style={{fontWeight:"bold"}}>
                        
                        Bonus : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange={this.formData} name="Bonus"></input><br></br><br></br>
                        Month : <select style={{border: "3px solid #ccc",float: "right",width: "68%"}} value={this.state.Month}>
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
                        Year : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" maxLength="4" onChange= {this.formData} name="Year"></input><br></br><br></br>
                        Date : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="date" onChange= {this.formData} name="Paid_Date"></input><br></br>  <br></br>         
                        Paid : <input style={{border: "3px solid #ccc"}} type="checkbox" checked={this.state.condition} onChange= {this.formData} name="Paid"></input><br></br>
                    
                        </form>
                    </Card>
                </Col>
                </Row>
            </div>
            <div>
                <input style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"none",padding:"12px 28px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} type="submit" value="Add salary detail"></input>
                </div>
              </div>
              </div>
            </div>
        )
    }
}
