import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/UserSidebar.css'
import home_icon from '../Images/home_icon.png';
import { BrowserRouter as Link } from "react-router-dom";
import logo_creative from '../Images/logo_creative.png';
import user_dash_pic from '../Images/user_dash_pic.png';
import user_group from '../Images/user_group.png';


class UserDashboard extends Component {
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
                            
                            
                            <a href="http://127.0.0.1:8000/login/" style={{marginTop:30}}>Logout</a>
                        </div>
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11 col-xm-11">
                        
                        <div className="row">
                            <div className="col-lg-11" style={{backgroundColor:"", height: 100}}>
                                <h1 style={{paddingTop:50, paddingLeft:120}}>User Management</h1>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1 col-xm-1" style={{backgroundColor:"", height:100}}> 
                                <img src={logo_creative} style={{marginLeft: 30, marginTop:0, width:70, height:100 }}></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 d-md-block d-none" style={{backgroundColor:"white", height: 500}}>
                                <img src={user_dash_pic} style={{marginLeft: 550, width:650, height:500 }}></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 58}}>
                                <h4 style={{paddingLeft:125, marginTop:30}}>Summary</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4" style={{backgroundColor:"", height: 230}}>
                                <div className="container" style={{paddingLeft: 20, paddingTop:20, width:380}}>
                                    <div className="col-lg-12" style={{backgroundColor:"", height: 160}}>    
                                        <div class="col shadow p-3 mb-5  rounded" style={{backgroundColor:"#f06ec6",height: 160, width: 380}} >
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xm-4" style={{backgroundColor:"", height: 130}}>
                                                    <img src={user_group} style={{marginTop:35, marginLeft: 10, width:50, height:50 }}></img>
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xm-8" style={{backgroundColor:"", height: 130}}>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 65}}>
                                                            <h5 style={{color:"white",textAlign:"center", marginTop: 25}}>No of Customers</h5>
                                                        </div>
                                                         
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 65}}>
                                                            <h3 style={{color:"white", textAlign:"center"}}>---</h3>
                                                        </div>
                                                         
                                                    </div>
                                                </div> 
                                            </div>
                                              
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4" style={{backgroundColor:"", height: 230}}>
                                <div className="container" style={{paddingLeft: 20, paddingTop:20, width:380}}>
                                    <div className="col-lg-12" style={{backgroundColor:"", height: 160}}>    
                                        <div class="col shadow p-3 mb-5  rounded" style={{backgroundColor:"#f06ec6",height: 160, width: 380}} >
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xm-4" style={{backgroundColor:"", height: 130}}>
                                                    <img src={user_group} style={{marginTop:35, marginLeft: 10, width:50, height:50 }}></img>
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xm-8" style={{backgroundColor:"", height: 130}}>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 65}}>
                                                            <h5 style={{color:"white",textAlign:"center", marginTop: 25}}>No of Customers</h5>
                                                        </div>
                                                         
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 65}}>
                                                            <h3 style={{color:"white", textAlign:"center"}}>---</h3>
                                                        </div>
                                                         
                                                    </div>
                                                </div> 
                                            </div>
                                              
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4" style={{backgroundColor:"", height: 230}}>
                                <div className="container" style={{paddingLeft: 20, paddingTop:20, width:380}}>
                                    <div className="col-lg-12" style={{backgroundColor:"", height: 160}}>    
                                        <div class="col shadow p-3 mb-5  rounded" style={{backgroundColor:"#f06ec6",height: 160, width: 380}} >
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xm-4" style={{backgroundColor:"", height: 130}}>
                                                    <img src={user_group} style={{marginTop:35, marginLeft: 10, width:50, height:50 }}></img>
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xm-8" style={{backgroundColor:"", height: 130}}>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 65}}>
                                                            <h5 style={{color:"white",textAlign:"center", marginTop: 25}}>No of Customers</h5>
                                                        </div>
                                                         
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 65}}>
                                                            <h3 style={{color:"white", textAlign:"center"}}>---</h3>
                                                        </div>
                                                         
                                                    </div>
                                                </div> 
                                            </div>
                                              
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
 
export default UserDashboard;