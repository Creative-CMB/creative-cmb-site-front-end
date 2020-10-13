import React, { Component } from 'react';
import { Card } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';
export default class AddDeptSupervisor extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                emp_id:'',
                dept_id:'',
                from_date:'',
                to_date:''                
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
                        fontWeight:"bold"}}>
                        <center>ADD SUPERVISORS FOR DEPARTMENTS</center>
                </h1>
                <br></br><br></br><br></br><br></br>

                <Card style={{ width: 600 }}>
                <form   
                    style={{
                        fontSize: '15px',
                        fontWeight:"bold"}}
                        >
                    Employee ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="emp_id"></input><br></br><br></br>
                    Department ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="dept_id" ></input><br></br><br></br>
                    From : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="date"onChange= {this.formData} name="from_date"></input><br></br><br></br>
                    To : <input style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="date"  onChange= {this.formData} name="to_date"></input><br></br><br></br>                   
                </form>
                </Card>
                <div>
                <br></br><br></br><br></br>

                <input style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"none",padding:"12px 28px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} type="submit" value="Add supervisor"></input>
                </div>
                </div> 
            </div>
            </div>
        )
    }
}
