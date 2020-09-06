import React, { Component } from 'react';
import { Card } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';

export default class AddDeptManager extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                Employee_ID:'',
                Department_ID:'',
                From_Date:'',
                To_Date:''                
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
                <h1 style={{color: "DodgerBlue", fontSize: '30px', fontWeight:"bold"}}><center>ADD MANAGERS FOR DEPARTMENTS</center></h1><br></br>
                <Card style={{ width: 600 }}>

                <form style={{ fontSize: '20px',fontWeight:"bold"}}>
                    Employee ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="Employee_ID"></input><br></br><br></br>
                    Department ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="Department_ID" ></input><br></br><br></br>
                    From : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="date"onChange= {this.formData} name="From_Date"></input><br></br><br></br>
                    To : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="date"  onChange= {this.formData} name="To_Date"></input><br></br><br></br>
                    
                </form>
                </Card>
                <div>
                    <br></br>
                <input style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"none",padding:"12px 28px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} type="submit" value="Add Manager"></input>
                </div>
              </div>
              
              </div>

            </div>
        )
    }
}
