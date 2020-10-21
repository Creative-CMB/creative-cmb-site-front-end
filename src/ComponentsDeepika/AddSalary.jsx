import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import { message,notification } from "antd";

export default class AddSalary extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                sal_id:'',
                emp_det_id:'',
                dept_id:'',
                basic_sal:'',
                extra_hours:'0',
                bonus:'',
                month:'',
                year:'',
                paid:'',
                Paid_Date:'',
                addDetVal: false,
              
             };
        }
        validatesubmit=()=>{
            let hours = this.state.extra_hours;
            let salary = this.state.basic_sal;
            let year = this.state.year;
            let bonus = this.state.bonus;

            if(isNaN(hours)){
                message.error("Hour must be a number");
            }
            else if(hours < 0 || hours>10){
                message.error("Hours need to be between 0 to 10 ");
            }
            else if(isNaN(salary)){
                message.error("salary must be a number");
            }
            else if(salary < 0){
                message.error("salary can't be less than 0");
            }
            else if(isNaN(bonus)){
                message.error("bonus must be a number");
            }
            else if(bonus < 0){
                message.error("bonus can't be less than 0");
            }
            else if(isNaN(year)){
                message.error("year must be a number");
            }
            else if(year < 2020 || year.length > 4){
                message.error("year can't be less than 2020 or greter than 4 numbers");
            }
            
            else{
                this.setState({addDetVal:true});
            }
        };z

        
        formData = (e) => {
            this.setState({ [e.target.name]: e.target.value });
            this.setState({ radstatus: !this.state.radstatus });

            console.log(
                this.state.emp_det_id,
                this.state.month,
                
            );
            console.log(this.state.radstatus);
            console.log(this.state.event);
        };

        drop = (e) =>{
            this.setState({[e.target.name]:e.target.value})
            console.log(this.state.event)
        }

        onCreateEmp = () => {
            console.log();
        };

        formSubmit  = (e) =>{
            e.preventDefault();
            if(this.state.addDetVal){
                const salData ={
                    sal_id:this.state.sal_id,
                    emp_det_id:this.state.emp_det_id,
                    dept_id:this.state.dept_id,
                    basic_sal:this.state.basic_sal,
                    extra_hours:this.state.extra_hours,
                    bonus:this.state.bonus,
                    month:this.state.month,
                    year:this.state.year,
                    paid:this.state.paid,
                    Paid_Date:this.state.Paid_Date,

                 };

            console.log(salData)

            const args = {
                description:
                  "Data added successfully",
                duration: 0,
              };
              notification.open(args);

            var url = "http://127.0.0.1:8000/Salary-Create/";

            fetch(url,{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify(salData)

            }).then((response)=>{
                alert(response)
            }).catch(function(err){
                alert(err)
            })
            }
            else {
                message.error("Add numeric value for salary, bonus and years Please re-check");
             }
        }
             
       
        
    render() {
        return (
            <div>
                <div className="row">
                <div className="col-lg-1.5 side"
                    style={{
                        backgroundColor:"LightBlue",
                        height:"650px"}}
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

                <form onSubmit= {this.formSubmit}
                            style={{
                                fontWeight:"bold"}}
                                >

                <div 
                    style={{
                        padding: "30px",
                        background: "#ececec"}}
                        >
                <Row gutter={50}>
                <Col span={12}>
                    <Card >
                        

                        Salary ID : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="sal_id" ></input><br></br><br></br>
                        Employee ID : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="emp_det_id" ></input><br></br><br></br>
                        Department ID : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text"onChange= {this.formData} name="dept_id"></input><br></br><br></br><br></br>
                        Basic Salary : <input  onBlur={this.validatesubmit} required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange={this.formData} name="basic_sal"></input><br></br><br></br>
                        Extra Hours : <input  onBlur={this.validatesubmit} required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange={this.formData}  name="extra_hours"></input><br></br><br></br><br></br><br></br>
                        
                    </Card>
                </Col>
                <Col span={12}>

                    <Card >
                        
                        
                        Bonus : <input required  onBlur={this.validatesubmit} style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange={this.formData} name="bonus" ></input><br></br><br></br>
                        Month : <select required id="month"style={{border: "3px solid #ccc",float: "right",width: "68%",height:43}}onChange= {this.formData} name="month">
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
                                </select><br></br><br></br><br></br>
                        Year : <input  onBlur={this.validatesubmit} required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" maxLength="4" onChange= {this.formData} name="year"></input><br></br><br></br>
                        Date : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="date" onChange= {this.formData} name="Paid_Date"></input><br></br>  <br></br>         
                        Paid : <select required id="Paid" style={{border: "3px solid #ccc",float: "right",width: "68%",height:42}} onChange= {this.formData} name="paid" >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        </select><br></br><br></br><br></br><br></br>
                    
                        
                    </Card>
                </Col>
                </Row>
            </div>
            <br></br><br></br>
            <div>

                <input style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"none",padding:"12px 28px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} type="submit" value="Add salary detail"></input>
                </div>
            </form>
            
                </div>
            </div>
            </div>
        )
    }
}
