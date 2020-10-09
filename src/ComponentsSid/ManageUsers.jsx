import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import home_icon from '../Images/home_icon.png';
import logo_creative from '../Images/logo_creative.png';



class ManageUsers extends Component {
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
                            <a href="#" style={{marginTop:30}}>Manage Users</a>
                        </div>
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11 col-xm-11">
                        
                        <div className="row">
                            <div className="col-lg-11" style={{backgroundColor:"", height: 100}}>
                                <h1 style={{paddingTop:50, paddingLeft:120}}>User Management: Manage Users</h1>
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
                                        <li class="breadcrumb-item active" aria-current="page">ManageUsers</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 50, marginLeft:120, marginTop:50}}>
                                <a href="/addusers">
                                    <button type="button" class="btn btn-primary" style={{backgroundColor:"Grey", marginLeft:1040,}}> + Add Users </button>
                                </a> 
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 450}}>
                                
                                    <div className="container" style={{marginLeft: 0, paddingTop: 70, width:1150}}>
                                        <div class="row shadow p-3 mb-5 rounded" style={{backgroundColor:"#f7f5f5"}}>
                                            <form>
                                                <div className="row">   
                                                    <h1>db</h1>
                                                </div>
                                                <div className="row" style={{marginLeft:1020}}>
                                                    <a href="/updateusers">
                                                        <button type="button" class="btn btn-primary" style={{backgroundColor:"red"}}> Update </button>
                                                    </a>
                                                </div>   
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{}}>
                                <a href="/userdashboard">
                                    <button type="button" class="btn btn-primary" style={{backgroundColor:"red"}}> Go Back </button>
                                </a>
                            </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ManageUsers;