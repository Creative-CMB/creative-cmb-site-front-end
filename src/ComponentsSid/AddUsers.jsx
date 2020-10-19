import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import home_icon from '../Images/home_icon.png';
import logo_creative from '../Images/logo_creative.png';
import jsPDF from "jspdf"
import autoTable from 'jspdf-autotable'
import {notification, Spin } from "antd";


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

      
      
    OnSubmit = (e) => {
        e.preventDefault();

        //sending final data
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

        

        this.generatePDF(data);

        const args = {
            message: <Spin />,
            description:
              "The form is submitting. You will redirect to the page, once it is done. Thank you for your patience.",
            duration: 0,
        };
        notification.open(args);
    
        console.log(data);

        fetch("http://127.0.0.1:8000/new-user/", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)}).then((response) => {
            alert(response.headers)
          }).catch(function(err){
            alert(err)
          })
        
          
    };

    render() { 
        return ( 
            <div>
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xm-1">
                        <div class="sidenav">
                            <a href="/userdashboard">
                                <img src={home_icon} style={{marginLeft:50,width:50, height:50 }}></img>
                            </a>
                            <a href="/addusers" style={{marginTop:30}}>Add Users</a>
                            <a href="/manageusers" style={{marginTop:30}}>Manage Users</a>
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
                                                                        name="first_name" onChange={this.textdata}/>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <input type="text" class="form-control" id="inputLName" placeholder="Last name"
                                                                        name="last_name" onChange={this.textdata}/>
                                                                    <br/>
                                                                </div>
                                                            </div>
                                                            <div class="form-row" style={{marginTop:0}}>
                                                                <div class="col-md-12">
                                                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email Address"
                                                                        name="email" onChange={this.textdata}/>
                                                                </div>
                                                            </div>
                                                            <div class="form-row" style={{marginTop:20, marginBottom:10}}>
                                                                <div class="col-md-12">
                                                                    <input type="tel" class="form-control" id="inputMobileNo" placeholder="Mobile Number"
                                                                        name="mobile_number" onChange={this.textdata}/>
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
                                                                        name="city" onChange={this.textdata}/>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label for="inputCity"><h6 style={{color:"gray"}}>District</h6></label>
                                                                    <input type="text" class="form-control" id="inputCity"
                                                                        name="district" onChange={this.textdata}/>
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