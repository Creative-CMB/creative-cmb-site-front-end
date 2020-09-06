import React, { Component } from 'react';
import { Card } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';

export default class AddDepartment extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                Admin_ID:'',
                ID:'',
                Name:'',
                Manager:''
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
                    <h1 style={{color: "DodgerBlue", fontSize: '30px',fontWeight:"bold"}}><center>ADD DEPARTMENT</center></h1><br></br><br></br>
                    <Card style={{ width: 1000,}}>

                    <form style={{fontSize: '15px',fontWeight:"bold"}}>
                        Admin ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="Admin_ID"></input><br></br><br></br>
                        Department ID : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="ID"></input><br></br><br></br>
                        Name : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="Name" ></input><br></br><br></br>
                        Manager of Department : <input style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="Manager"></input><br></br><br></br>
                        
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
