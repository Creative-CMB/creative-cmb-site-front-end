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
                                <h1 style={{paddingTop:50, paddingLeft:120}}>User Management</h1>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1 col-xm-1" style={{backgroundColor:"", height:100}}> 
                                <img src={logo_creative} style={{marginLeft: 30, marginTop:0, width:70, height:100 }}></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 d-md-block d-none" style={{backgroundColor:"white", marginTop:100, height: 500}}>
                                <img src={user_dash_pic} style={{marginLeft: 550, width:650, height:500 }}></img>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        );
    }
}
 
export default UserDashboard;