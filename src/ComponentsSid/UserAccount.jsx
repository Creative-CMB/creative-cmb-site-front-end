import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import user_pic from '../Images/user_pic.jpg';


class UserAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div>
                <div className="row">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"black", height: 100}}>
                        lOGO AND NAV BAR
                   </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12" style={{backgroundColor:"#03c6fc", height: 1140}}>
                        <div className="row" style={{backgroundColor:"#03c6fc",height: 60}}>
                            <div className="container" style={{float:"center",paddingTop: 40,  paddingLeft: 30, width:300}}>
                                <div class="row shadow p-3 mb-5  rounded" style={{backgroundColor:"#c92e91",height: 100, width: 300}} >
                                    <div className="col-lg-3 col-md-4 col-sm-4 col-sm-4" style={{height: 70, width: 40}}>
                                        <img src={user_pic} style={{height:70, width:70}}></img>
                                    </div>
                                    <div className="col-lg-9 col-md-8 col-sm-8 col-sm-8" style={{paddingLeft: 50, height: 70, width: 400, wordWrap:"break-word"}}>
                                        <h3 style={{color:"white"}}>John Smith</h3>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xm-6" style={{backgroundColor:"",height: 980}}>
                                <div className="container" style={{float:"center", paddingTop: 120, paddingLeft: 20, width:300}}>
                                    <div class="row shadow p-3 mb-5 bg-white rounded" style={{backgroundColor:"#f0f0f0",height: 300, width: 350}} >
                                        <div class="form-row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xm-12">
                                                <h4><b>Personal Information</b></h4> 
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 20, width: 150, wordWrap:"break-word"}}>
                                                <h5 >First Name</h5><br/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 20, width: 150, wordWrap:"break-word"}}>
                                                <h5 style={{color:"gray"}}>John</h5><br/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 20, width: 150, wordWrap:"break-word"}}>
                                                
                                                <h5>Last Name</h5><br/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 20, width: 150, wordWrap:"break-word"}}>
                                            
                                                <h5 style={{color:"gray"}}>Smith</h5><br/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 20, width: 150, wordWrap:"break-word"}}>
                                                <h5>Date of Birth</h5>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 20, width: 150, wordWrap:"break-word"}}>
                                            
                                                <h5 style={{color:"gray"}}>09 January 1993</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <div className="container" style={{float:"center", paddingLeft: 20, width:300}}>
                                    <div class="row shadow p-3 mb-5 bg-white rounded" style={{backgroundColor:"#f0f0f0",height: 220, width: 350}} >
                                        <div class="form-row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xm-12">
                                                <h4><b>Account Information</b></h4> 
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 30, width: 150, wordWrap:"break-word"}}>
                                                <h5>Email Address</h5><br/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 30, width: 150, wordWrap:"break-word"}}>
                                            
                                            <h5 style={{color:"gray"}}>johnsmith@gmail.com</h5>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 30, width: 150, wordWrap:"break-word"}}>
                                                <h5>Mobile Number</h5><br/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 30, width: 150, wordWrap:"break-word"}}>
                                                <h5 style={{color:"gray"}}>0713453672</h5>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                                <div className="container" style={{float:"center",paddingLeft: 20, width:300}}>
                                    <div class="row shadow p-3 mb-5 bg-white rounded" style={{backgroundColor:"#f0f0f0",height: 200, width: 350}} >
                                        <div class="form-row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xm-12">
                                                <h4><b>Location Information</b></h4> 
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 30, width: 150, wordWrap:"break-word"}}>
                                                <h5>City</h5><br/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 30, width: 150, wordWrap:"break-word"}}>
                                            
                                            <h5 style={{color:"gray"}}>Batticaloa</h5>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 30, width: 150, wordWrap:"break-word"}}>
                                                <h5>District</h5><br/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 30, width: 150, wordWrap:"break-word"}}>
                                            
                                            <h5 style={{color:"gray"}}>Batticaloa</h5>
                                            </div>
                                        </div>    
                                    </div>
                                </div>     
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xm-6" style={{backgroundColor:"",height: 670}}>
                                <div className="container" style={{float:"center", paddingTop: 120, paddingLeft: 20, width:300}}>
                                    <div class="row shadow p-3 mb-5 bg-white rounded" style={{backgroundColor:"#f0f0f0",height: 200, width: 350}} >
                                        <div class="form-row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xm-12">
                                                <h4><b>Current Event Information</b></h4> 
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 20, width: 150, wordWrap:"break-word"}}>
                                                <h5>No current events available</h5><br/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 20, width: 150, wordWrap:"break-word"}}>
                                                <h5 style={{color:"gray"}}>null</h5><br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <div className="container" style={{float:"center", paddingLeft: 20, width:300}}>
                                    <div class="row shadow p-3 mb-5 bg-white rounded" style={{backgroundColor:"#f0f0f0",height: 260, width: 350}} >
                                        <div class="form-row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xm-12">
                                                <h4><b>Payment Information</b></h4> 
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 30, width: 150, wordWrap:"break-word"}}>
                                                <h5>Account Number</h5><br/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 30, width: 150, wordWrap:"break-word"}}>
                                                <h5 style={{color:"gray"}}>2123 4537 8900</h5>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 30, width: 150, wordWrap:"break-word"}}>
                                                <h5>Latest Payment</h5><br/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-6" style={{backgroundColor:"", height: 30, width: 150, wordWrap:"break-word"}}>
                                                <h5 style={{color:"gray"}}>Rs 45000.00</h5>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12" style={{backgroundColor:"#03c6fc",height: 1140}}>
                        <div className="container" style={{float:"center", paddingTop: 230, width:500}}>
                            <div class="row shadow p-3 mb-5 bg-white rounded" >
                                <form>
                                    <div class="form-row">
                                        <div class="col">
                                            <h1><b>Edit</b></h1> <br/>
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="col-md-6">
                                            <input type="text" class="form-control form-control-lg" id="inputFName" placeholder="First name"/>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" class="form-control form-control-lg" id="inputLName" placeholder="Last name"/>
                                            <br/>
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <input type="tel" class="form-control form-control-lg" id="inputMobileNo" placeholder="Mobile Number"/>
                                            <br/>
                                        </div>
                                    </div>
                                  
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <input type="email" class="form-control form-control-lg" id="inputEmail" placeholder="Email Address"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="password" class="form-control form-control-lg" id="inputPassword" placeholder="Password"/>
                                        </div>
                                    </div>
                                   
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="inputDOB"><h5><b>Date of Birth</b></h5></label>
                                            <input class="form-control form-control-lg" type="date" value="" id="inputDOB"/>
                                        </div>
                                    </div>


                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputCity"><h5><b>City</b></h5></label>
                                            <input type="text" class="form-control form-control-lg" id="inputCity"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputCity"><h5><b>District</b></h5></label>
                                            <input type="text" class="form-control form-control-lg" id="inputCity"/>
                                        </div>
                                    </div>
                                    <br/>
                                    <button type="submit" class="btn btn-primary btn-lg">Save </button>
                                    
                                    <small id="loginPrompt" class="form-text text-muted">If you want to change any details of yourself, use this form. </small>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default UserAccount;