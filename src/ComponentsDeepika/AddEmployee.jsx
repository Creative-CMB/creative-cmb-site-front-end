import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';

export default class AddEmployees extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                Admin_ID:'',
                ID:'',
                name:'',
                Primary_Phone:'',
                Secondary_Phone:'',
                Position:'Employee',
                Address:'',
                Email:'',
                Qualification:'',
                Trained:false,
                Trained_Years:'',
                Date_Of_Birth:'',
                Gender:'Male',
                Permanent:false,
                Joined_Date:''
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
                    <h1 style={{color: "DodgerBlue", fontSize: '30px', fontWeight:"bold"}}><center>ADD EMPLOYEE</center></h1><br></br>
                    <div style={{ padding: "30px",background: "#ececec"}}>

                    <Row gutter={50}>
                    <Col span={12}>
                        <Card >
                        <form style={{fontWeight:"bold"}}>
                            Admin ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="Admin_ID"></input><br></br><br></br>
                            Employee ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="ID"></input><br></br><br></br>
                            Name : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="name" ></input><br></br><br></br>
                            Primary phone : <input  style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" placeholder=" Like : 07X XXXX XXX" maxLength="10"onChange= {this.formData} name="Primary_Phone"></input><br></br><br></br>
                            Secondary phone : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text"  placeholder=" Like : 07X XXXX XXX"  maxLength="10"onChange= {this.formData} name="Secondary_Phone"></input><br></br><br></br>
                            Position :  <select style={{border: "3px solid #ccc",float: "right",width: "68%"}} value={this.state.Position}>
                                        <option value="Manager">Manager</option>
                                        <option value="Supervisor">Supervisor</option>
                                        <option value="Employee">Employee</option>
                                        </select><br></br><br></br>
                            Address : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="textarea" rows="3" onChange= {this.formData} name="Address"></input><br></br><br></br>
                            Email : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="email" onChange= {this.formData} name="Email"></input><br></br><br></br>
                           
                        </form>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card >
                            <form style={{fontWeight:"bold"}}>
                            Qualification : <input style={{border: "3px solid #ccc",float: "right",width: "70%"}} type="text" onChange= {this.formData} name="Qualification"></input><br></br><br></br>
                            Trained : <input style={{border: "3px solid #ccc"}} type="checkbox" checked={this.state.condition} onChange= {this.formData} name="Trained"></input><br></br><br></br>
                            Trained Years : <input style={{border: "3px solid #ccc",float: "right",width: "70%"}} type="text" onChange= {this.formData} name="Trained_Years"></input><br></br><br></br>
                            Date Of Birth : <input style={{border: "3px solid #ccc",float: "right",width: "70%"}} type="date" onChange= {this.formData} name="Date_Of_Birth"></input><br></br><br></br>
                            Gender : <select style={{border: "3px solid #ccc",float: "right",width: "70%"}} value={this.state.Gender}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        </select><br></br><br></br>
                            Permanent : <input style={{border: "3px solid #ccc"}}  type="checkbox" onChange= {this.formData} name="Permanent"></input><br></br><br></br>
                            Joined Date : <input style={{border: "3px solid #ccc",float: "right",width: "70%"}} type="date" onChange= {this.formData} name="Joined_Date"></input><br></br><br></br><br></br><br></br>
                    
                    
                </form>
                
                        </Card>
                    </Col>
                    </Row>

                    

                </div>
                <div>
                <input style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"none",padding:"12px 28px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} type="submit" value="Add Employee"></input>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
