import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import home_icon from '../Images/home_icon.png';
import logo_creative from '../Images/logo_creative.png';



class UpdateUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
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
                                <h1 style={{paddingTop:50, paddingLeft:120}}>User Management: Update Users</h1>
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
                                        <li class="breadcrumb-item active" aria-current="page">UpdateUsers</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 450}}>
                                
                                <div className="container" style={{marginLeft: 120, paddingTop: 70, width:1150}}>
                                    <div class="row shadow p-3 mb-5 rounded" style={{backgroundColor:"#f7f5f5"}}>
                                        <form>
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
                                                                    <input type="text" class="form-control" id="inputFName" placeholder="First name"/>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <input type="text" class="form-control" id="inputLName" placeholder="Last name"/>
                                                                    <br/>
                                                                </div>
                                                            </div>
                                                            <div class="form-row" style={{marginTop:0}}>
                                                                <div class="col-md-12">
                                                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email Address"/>
                                                                </div>
                                                            </div>
                                                            <div class="form-row" style={{marginTop:20, marginBottom:10}}>
                                                                <div class="col-md-12">
                                                                    <input type="tel" class="form-control" id="inputMobileNo" placeholder="Mobile Number"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6" style={{backgroundColor:"", width:920}}>
                                                            <div class="col-lg-12 ">
                                                                <div class="form-row">
                                                                    <div class="form-group col-md-12">
                                                                        <label for="inputDOB"><h6 style={{color:"gray"}}>Date of Birth</h6></label>
                                                                        <input class="form-control " type="date" value="" id="inputDOB"/>
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
                                                                    <input type="text" class="form-control" id="inputCity"/>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label for="inputCity"><h6 style={{color:"gray"}}>District</h6></label>
                                                                    <input type="text" class="form-control" id="inputCity"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{marginLeft:1000}}>
                                                <button type="submit" class="btn btn-primary">Update</button>
                                            </div>   
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{marginLeft:120}}>
                                <a href="/userdashboard">
                                    <button type="button" class="btn btn-primary" style={{backgroundColor:"red"}}> Go Back </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default UpdateUsers;