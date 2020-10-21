import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import home_icon from '../Images/home_icon.png';
import logo_creative from '../Images/logo_creative.png';
import jsPDF from "jspdf"
import autoTable from 'jspdf-autotable'
import {notification, Spin, message } from "antd";


const cryptoRandomString = require('crypto-random-string');

class AddUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            user_id: cryptoRandomString({ length: 7 }),
            date_of_birth: "",
            first_name: "",
            last_name: "",
            mobile_number: "",
            email: "",            
            district: "",
            city: "",
            mobile_number_validation: false,            
            fname_validation: false,                      
            lname_validation: false,                      
            city_validation: false,                      
            district_validation: false,
            email_validation: false
          };
    }

    componentWillMount() {
        this.getChartData();
      }
    
    componentDidMount(){
        document.title = "CreateCMB | Add Users";
    }

    getChartData() {
        this.setState({
          data: {
            datasets: [
              {
                label: "complete",
                data: [60, 40],
                backgroundColor: ["#0f4c75", "#3282b8"],
              },
            ],
          },
        });
    }

    textdata = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    generatePDF = (userdata) => {
        const doc = new jsPDF();
        const tableColumns = ["User Id", "Date of Birth", "First name", "Last Name", "Mobile Number", "Email", "District", "City"];
        const tableRows = [];
    
        const rowdata = [
            userdata.user_id,
            userdata.date_of_birth,
            userdata.first_name,
            userdata.last_name,
            userdata.mobile_number,
            userdata.email,            
            userdata.district,
            userdata.city          
        ];
    
        tableRows.push(rowdata);
    
        doc.autoTable(tableColumns, tableRows, { startY: 20 });
        const date = Date().split(" ");

        const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
        doc.text(userdata.first_name + " " + userdata.last_name + "'s Details" + " - ** this is an auto generated file.", 14, 15);
        doc.save(`report_${dateStr}.pdf`);
    
      }

    validateMobileNumber = () => {
        let mobileNumber = this.state.mobile_number;
        if (isNaN(mobileNumber)) {
            message.error(
                "Invalid Entry! " +
                mobileNumber +
                " is not recognized as a valid mobile number. Please check the input and try again"
            );
        } else if (mobileNumber.length != 10) {
            message.error(
                "The mobile number must have 10 digits. Please check the input and try again."
                );
        } else {
            this.setState({ mobile_number_validation: true });
        }
    };

    validateFirstName = () => {
        let first_name = this.state.first_name;        
    
        if (first_name =='') {
            message.error(
                "First name field is empty. Please fill all the fields."
            );
        }   else if (!isNaN(first_name)) {
            message.error("Invalid Entry! First name should not contain numeric value");
        }         
        else {
          this.setState({ fname_validation: true });
        }
    };

    validateLastName = () => {
        let last_name = this.state.last_name;        
        
        if (last_name =='') {
            message.error(
                "Last name field is empty. Please fill all the fields."
            );
        }   else if (!isNaN(last_name)) {
            message.error("Invalid Entry! Last name should not contain numeric value");
        }         
        else {
          this.setState({ lname_validation: true });
        }
    };

    validateCity = () => {
        let city = this.state.city;        
    
        if (city =='') {
            message.error(
                "City field is empty. Please fill all the fields."
            );
        }   else if (!isNaN(city)) {
            message.error("Invalid Entry! City should not contain numeric value");
        }         
        else {
          this.setState({ city_validation: true });
        }
    };

    validateDistrict = () => {
        let district = this.state.district;
            
        if (district =='') {
            message.error(
                "District field is empty. Please fill all the fields."
            );
        }   else if (!isNaN(district)) {
            message.error("Invalid Entry! District should not contain numeric value");
        }         
        else {
          this.setState({ district_validation: true });
        }
    };

    validateEmail = () => {        
        
        let email = this.state.email;
        var email_values = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
            
        if (email =='') {
            message.error(
                "Email field is empty. Please fill all the fields."
            );
        } else if (!email_values.test(email)) {
            message.error("Invalid Entry! Please check the email field and try again.");
        }         
        else {
          this.setState({ email_validation: true });
        }
    };

      
    OnSubmit = (e) => {
        e.preventDefault();

        const data = {
            user_id: "USR"+this.state.user_id,
            date_of_birth: this.state.date_of_birth,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            mobile_number: this.state.mobile_number,
            email: this.state.email,
            
            district: this.state.district,
            city: this.state.city,
        };
        
        console.log(data);

        if (this.state.mobile_number_validation== true && this.state.fname_validation== true
            && this.state.lname_validation== true && this.state.city_validation== true 
            && this.state.district_validation== true && this.state.email_validation== true){
            fetch("http://127.0.0.1:8000/new-user/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data)}).then((response) => {
                
            }).catch(function(err){
                alert(err)
            })

            
            this.generatePDF(data);

            const args = {
                message: <Spin />,
                description:
                  "Submission Successful! A report is generating. Thank you for your patience.",
                duration: 2,
            };
            notification.open(args);

        }
        else {
            const args = {
                message: "Notification",
                description: "Invalid Form. Check for errors and try again.",
                duration: 4,
            };
            notification.open(args);
        }
        
          
    };

    render() {
        return ( 
            <div>
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xm-1">
                        <div class="sidenav" style={{backgroundColor:'#3a64c7'}}>
                            <div className="row">
                                <a href="/userdashboard">
                                    <img src={home_icon} style={{marginLeft:50,width:50, height:50 }}></img>
                                </a>
                                <a href="/addusers" style={{marginTop:30,marginLeft:20}}>Add Customers</a>
                                <a href="/manageusers" style={{marginTop:30,marginLeft:20}}>Manage Customers</a>                                
                                <a href="/manageloggedusers" style={{marginTop:30,marginLeft:20}}>Manage Logged Users</a>                                                    
                                <a href="http://127.0.0.1:8000/registeradmin/" style={{marginTop:30,marginLeft:20}}>Add Admin</a>
                            </div>
                            <div className="row" style={{height:300}}>
                            </div>
                            <div className="row" style={{marginBottom:10}}>
                                <a href="http://127.0.0.1:8000/login/" style={{marginTop:30,marginLeft:20}}>
                                    <h3 >
                                        Logout
                                    </h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11 col-xm-11">
                        
                        <div className="row">
                            <div className="col-lg-11" style={{backgroundColor:"", height: 100}}>
                                <h1 style={{paddingTop:50, paddingLeft:120}}>User Management: Add Users</h1>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1 col-xm-1" style={{backgroundColor:"", height:100}}> 
                                <img src={logo_creative} style={{marginLeft: 50, marginTop:0, width:70, height:100 }}></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 d-md-block d-none" style={{backgroundColor:"white", height: 50}}>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb" style={{marginTop:20, marginLeft:120}}>
                                        <li class="breadcrumb-item"><a href="/userdashboard">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">AddUsers</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 450}}>
                                
                                <div className="container" style={{marginLeft: 120, paddingTop: 70, width:1150}}>
                                    <div class="row shadow p-3 mb-5 rounded" style={{backgroundColor:"#f7f5f5"}}>
                                        <form onSubmit={this.OnSubmit.bind(this)}>
                                            <div className="row">   
                                                <div className="col-lg-8" style={{backgroundColor:"", width:920}}>
                                                    <h5 style={{color:"gray"}}><b>Personal Information</b></h5>
                                                </div>
                                                <div className="col-lg-4" style={{backgroundColor:"", width:920, marginLeft:-15}}>
                                                    
                                                        <div class="col-lg-12">
                                                        <h5 style={{color:"gray"}}><b>Location Information</b></h5>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="row">   
                                                <div className="col-lg-8" style={{backgroundColor:"", width:920}}>
                                                    <div className="row">   
                                                        <div className="col-lg-6" style={{backgroundColor:"", width:920}}>
                                                            <div class="form-row" style={{marginTop:20}}>
                                                                <div class="col-md-6">
                                                                    <input type="text" class="form-control" id="inputFName" placeholder="First name"
                                                                        name="first_name" onChange={this.textdata} onBlur={this.validateFirstName}/>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <input type="text" class="form-control" id="inputLName" placeholder="Last name"
                                                                        name="last_name" onChange={this.textdata} onBlur={this.validateLastName}/>
                                                                    <br/>
                                                                </div>
                                                            </div>
                                                            <div class="form-row" style={{marginTop:0}}>
                                                                <div class="col-md-12">
                                                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email Address"
                                                                        name="email" onChange={this.textdata} onBlur={this.validateEmail}/>
                                                                </div>
                                                            </div>
                                                            <div class="form-row" style={{marginTop:20, marginBottom:10}}>
                                                                <div class="col-md-12">
                                                                    <input type="tel" class="form-control" id="inputMobileNo" placeholder="Mobile Number"
                                                                        name="mobile_number" onChange={this.textdata} onBlur={this.validateMobileNumber}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6" style={{backgroundColor:"", width:920}}>
                                                            <div class="col-lg-12 ">
                                                                <div class="form-row">
                                                                    <div class="form-group col-md-12">
                                                                        <label for="inputDOB"><h6 style={{color:"gray"}}>Date of Birth</h6></label>
                                                                        <input class="form-control" type="date" id="inputDOB"
                                                                            name="date_of_birth" onChange={this.textdata}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4" style={{backgroundColor:"", width:920}}>
                                                    <div className="row">   
                                                        <div className="col-lg-12" style={{backgroundColor:"", width:920}}>
                                                            <div class="form-row">
                                                                <div class="form-group col-md-12" style={{marginTop:10}}>
                                                                    <label for="inputCity"><h6 style={{color:"gray"}}>City</h6></label>
                                                                    <input type="text" class="form-control" id="inputCity"
                                                                        name="city" onChange={this.textdata} onBlur={this.validateCity}/>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label for="inputCity"><h6 style={{color:"gray"}}>District</h6></label>
                                                                    <input type="text" class="form-control" id="inputCity"
                                                                        name="district" onChange={this.textdata} onBlur={this.validateDistrict}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{marginLeft:1020}}>
                                                <button type="submit" class="btn btn-primary">Save </button>
                                            </div>   
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{marginLeft:120}}>
                                <a href="/userdashboard">
                                    <button type="button" class="btn btn-primary" style={{backgroundColor:"red"}}> Go to Home </button>
                                </a>
                                <a href="/manageusers" style={{marginLeft:20}}>
                                    <button type="button" class="btn btn-primary" style={{backgroundColor:"blue"}}> Go to DataBase </button>
                                </a>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AddUsers;