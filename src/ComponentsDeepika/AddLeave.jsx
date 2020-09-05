import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';

export default class AddLeave extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                Leave_ID:'',
                empname:'',
                deptname:'',
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
                

                <div className="col-lg-1.5 side">
                    {/*Navigation bar */}
                    <EmployeeSideNavBar />
                </div>

                <div className="col main">
  
                    {/*Middle page components */}
                <h1 style={{color: "DodgerBlue", fontSize: '30px'}}><center>Add Leaves</center></h1><br></br>
                <div style={{ padding: "30px",background: "#ececec"}}>
                <Row gutter={50}>
                <Col span={12}>
                    <Card >
                    <form style={{fontSize: '20px'}}>
                    Leave ID : <input type="text" onChange= {this.formData} name="Leave_ID"></input><br></br><br></br>
                    Employee Name : <input type="text" onChange= {this.formData} name="empname" ></input><br></br><br></br>
                    Department Name : <input type="text"onChange= {this.formData} name="deptname"></input><br></br><br></br>
                    Leave Type :  <select value={this.state.Leave_Type}>
                                <option value="Paid">Paid</option>
                                <option value="Non-Paid">Non-paid</option>
                                </select><br></br><br></br>
                    </form>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card >
                        <form style={{fontSize: '20px'}}>
                        Month : <select value={this.state.Month}>
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
                        Year : <input type="text" maxLength="4" onChange= {this.formData} name="Year"></input><br></br><br></br>
                        Date : <input type="date" onChange= {this.formData} name="Date"></input><br></br><br></br>
                        Reason : <input type="text" onChange= {this.formData} name="Reason"></input><br></br><br></br>
                        Accepted : <input type="checkbox" checked={this.state.condition} onChange= {this.formData} name="Accepted"></input><br></br><br></br>
                    
                        </form>
                    </Card>
                </Col>
                </Row>
            </div>

              </div>
              </div>
            </div>
        )
    }
}
