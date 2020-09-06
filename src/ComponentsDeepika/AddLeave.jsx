import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';

export default class AddLeave extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                empid:'',
                deptid:'',
                Leave_Type:'Non-Paid',
                Month:'',
                Year:'2021',
                Date:'',
                Reason:'',
                Accepted:false
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
                

                <div className="col-lg-1.5 side" style={{backgroundColor:"LightBlue", height:"700px"}}>
                    {/*Navigation bar */}
                    <br></br>
                    <EmployeeSideNavBar />
                </div>

                <div className="col main">
  
                    {/*Middle page components */}
                    <br></br>
                <h1 style={{color: "DodgerBlue", fontSize: '30px',fontWeight:"bold"}}><center>ADD LEAVES</center></h1><br></br><br></br>
                <div style={{ padding: "30px",background: "#ececec"}}>
                <Row gutter={50}>
                <Col span={12}>
                    <Card >
                    <form style={{fontSize: '15px',fontWeight:"bold"}}>
                    Employee ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="empid" ></input><br></br><br></br>
                    Department ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text"onChange= {this.formData} name="deptid"></input><br></br><br></br><br></br>
                    Leave Type :  <select style={{border: "3px solid #ccc",float: "right",width: "68%"}} value={this.state.Leave_Type}>
                                <option value="Paid">Paid</option>
                                <option value="Non-Paid">Non-paid</option>
                                </select><br></br><br></br>
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
                    </form>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card >
                        <form style={{fontSize: '15px',fontWeight:"bold"}}>
                       
                        Year : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" maxLength="4" onChange= {this.formData} name="Year"></input><br></br><br></br>
                        Date : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="date" onChange= {this.formData} name="Date"></input><br></br><br></br>
                        Reason : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="Reason"></input><br></br><br></br>
                        Accepted : <input style={{border: "3px solid #ccc"}} type="checkbox" checked={this.state.condition} onChange= {this.formData} name="Accepted"></input><br></br><br></br><br></br>
                    
                        </form>
                    </Card>
                </Col>
                </Row>
            </div>
            <div>
                    <br></br><br></br>
                <input style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"none",padding:"12px 28px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} type="submit" value="Add supervisor"></input>
                </div>
              </div>
              </div>
            </div>
        )
    }
}
