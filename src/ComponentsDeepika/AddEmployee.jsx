import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import axios from 'axios';

class AddEmployees extends Component {

        constructor(props) {
            super(props);
            this.state = {
                admins:[],
                admin_id:'',
                emp_det_id:'',
                employee_name:'',
                primary_phone:'',
                secondary_phone:'',
                position:'',
                address:'',
                email:'',
                qualification:'',
                trained_years:'',
                dob:'',
                gender:'',
                permenent:'',
                joined_date:'',
             };
           
        }

        componentDidMount(){
            this.fetchAdmins();
        }

        fetchAdmins = () =>{
            axios.get("http://127.0.0.1:8000/admin-list/").then(res=>
            {
                const admins=res.data;
                this.setState({admins});
            })
        }

       
        formData = (e) => {
            this.setState({ [e.target.name]: e.target.value });
            this.setState({ radstatus: !this.state.radstatus });

            console.log(
                this.state.admin_id,
                this.state.emp_det_id, 
                this.state.employee_name,
                this.state.qualification,
                this.state.trained_years,
                this.state.dob,
                this.state.gender,
                this.state.permenent,
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
        

        const empData ={
            admin_id : this.state.admin_id,
            emp_det_id : this.state.emp_det_id,
            employee_name : this.state.employee_name,
            primary_phone : this.state.primary_phone,
            secondary_phone : this.state.secondary_phone,
            position : this.state.position,
            address : this.state.address,
            email : this.state.email,
            qualification : this.state.qualification,
            trained_years : this.state.trained_years,
            dob : this.state.dob,
            gender : this.state.gender,
            permenent : this.state.permenent,
            joined_date : this.state.joined_date

        };

        console.log(empData)

        var url = "http://127.0.0.1:8000/EmployeeDetail-Create/";

        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(empData)

        }).then((response)=>{
            alert(response)
        }).catch(function(err){
            alert(err)
        })
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
                    <h1     
                        style={{
                            color: "DodgerBlue",
                            fontSize: '30px',
                            fontWeight:"bold"}}
                            ><center>ADD EMPLOYEE</center>
                    </h1><br></br>

                    <form  onSubmit= {this.formSubmit}
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
                        
                            Admin ID :<select onChange={this.formData} id="admin" name="admin_id" style={{border: "3px solid #ccc",float: "right",width: "68%"}}>
                                        {this.state.admins.map((ad) =>{
                                            const adId = ad.id;
                                            const adName = ad.username;

                                            return(
                                            <option value={ad.id}>{ad.username}</option>
                                            );
                                        })}
                            </select><br></br><br></br>
                            Employee ID : <input id="emp" style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="emp_det_id"></input><br></br><br></br>
                            Name : <input id="name"style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" onChange= {this.formData} name="employee_name" ></input><br></br><br></br>
                            Primary phone : <input id="phone1" style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text" placeholder=" Like : 07X XXXX XXX" maxLength="10" onChange= {this.formData} name="primary_phone"></input><br></br><br></br>
                            Secondary phone : <input id="phone2"style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="text"  placeholder=" Like : 07X XXXX XXX"  maxLength="10" onChange= {this.formData} name="secondary_phone"></input><br></br><br></br>
                            Position :  <select id="position" style={{border: "3px solid #ccc",float: "right",width: "68%"}} onChange={this.formData} name="position">
                                        <option value="Manager" >Manager</option>
                                        <option value="Supervisor">Supervisor</option>
                                        <option value="Employee">Employee</option>
                                        </select><br></br><br></br>
                            Address : <input id="add" style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="textarea" rows="3" onChange= {this.formData} name="address"></input><br></br><br></br>
                            Email : <input id="email" style={{border: "3px solid #ccc",float: "right",width: "68%"}} type="email" onChange= {this.formData} name="email"></input><br></br><br></br>
                           
                        
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card >
                            
                            Qualification : <input id="qua" style={{border: "3px solid #ccc",float: "right",width: "70%"}} type="text" onChange= {this.formData} name="qualification"></input><br></br><br></br>
                            Trained Years : <input id="traind" style={{border: "3px solid #ccc",float: "right",width: "70%"}} type="text" onChange= {this.formData} name="trained_years"></input><br></br><br></br>
                            Date Of Birth : <input id="dob" style={{border: "3px solid #ccc",float: "right",width: "70%"}} type="date" onChange= {this.formData} name="dob"></input><br></br><br></br>
                            Gender : <select id="gen"style={{border: "3px solid #ccc",float: "right",width: "70%"}}  name="gender" onChange= {this.formData}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        </select><br></br><br></br>
                            Permanent : <select id="per"  style={{border: "3px solid #ccc",float: "right",width: "70%"}} name="permenent" onChange= {this.formData}>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        </select><br></br><br></br>
                            Joined Date : <input id="jdate"  style={{border: "3px solid #ccc",float: "right",width: "70%"}} type="date" onChange= {this.formData} name="joined_date"></input><br></br><br></br><br></br><br></br><br></br><br></br>
                
                        </Card>
                    </Col>
                    </Row>
                    
                </div>
                <div>
                <input style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"none",padding:"12px 28px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} type="submit" value="Add Employee"  ></input>
                </div>
                 </form>
                
                </div>
            </div>
            </div>
        );
    }
}
export default AddEmployees;