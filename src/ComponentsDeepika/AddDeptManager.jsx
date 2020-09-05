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
            <h1 style={{color: "DodgerBlue", fontSize: '30px'}}><center>Add Department Managers</center></h1><br></br>
            <Card style={{ width: 500 }}>

            <form style={{ fontSize: '20px'}}>
                Employee ID : <input type="text" onChange= {this.formData} name="Employee_ID"></input><br></br><br></br>
                Department ID : <input type="text" onChange= {this.formData} name="Department_ID" ></input><br></br><br></br>
                From : <input type="date"onChange= {this.formData} name="From_Date"></input><br></br><br></br>
                To : <input type="date"  onChange= {this.formData} name="To_Date"></input><br></br><br></br>
                
            </form>
            </Card>,
          </div>
          </div>

        </div>
        )
    }
}
