import React, { Component } from 'react';
import { Card } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';

export default class AddDepartment extends Component {

        constructor(props) {
            super(props);
            this.state = { 
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
                

                <div className="col-lg-1.5 side">
                    {/*Navigation bar */}
                    <EmployeeSideNavBar />
                </div>

                <div className="col main">

                    {/*Middle page components */}
                    <h1 style={{color: "DodgerBlue", fontSize: '30px'}}><center>Add Department</center></h1><br></br>
                    <Card style={{ width: 800 }}>

                    <form style={{fontSize: '20px'}}>
                        Department ID : <input type="text" onChange= {this.formData} name="ID"></input><br></br><br></br>
                        Name : <input type="text" onChange= {this.formData} name="Name" ></input><br></br><br></br>
                        Manager of Department : <input type="text" onChange= {this.formData} name="Manager"></input><br></br><br></br>
                        
                    </form>
                </Card>,
              
              
                </div>
                
                
                </div>
            </div>
        )
    }
}
