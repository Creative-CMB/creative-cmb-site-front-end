import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import signup_pic from '../Images/signup_pic.webp';

class Signup extends Component {
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


                    <div className="col-lg-6 col-md-6 col-sm-12 col-xm-8" style={{backgroundColor:"white",height: 800}}>
                        <div className="container" style={{float:"center", paddingTop: 40, width:500}}>
                            <div class="row shadow p-3 mb-5 bg-white rounded" >
                                <form onSubmit={this.submitdata}>
                                    <div class="form-row">
                                        <div class="col">
                                            <h1><b>Create an account</b></h1> <br/>
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
                                            <input class="form-control form-control-lg" type="datetime-local" value="" id="inputDOB"/>
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
                                    <fieldset class="form-group">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label for="inputGender"><h5><b>Gender</b></h5></label>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios" id="male" value="option1" checked/>
                                                    <label class="form-check-label" for="gridRadios1">
                                                        <h5>Male</h5>
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios" id="female" value="option2"/>
                                                    <label class="form-check-label" for="gridRadios2">
                                                        <h5>Female</h5>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset><br/>
                                    <button type="submit" class="btn btn-primary btn-lg">Sign in </button>
                                    
                                    <small id="loginPrompt" class="form-text text-muted">Already have an account? <a href="/login" ><b>Login</b></a> </small>
                                   
                                
                                
                                
                                
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 d-none d-md-block" style={{height: 800}}>
                        <img src={signup_pic} style={{paddingTop:75, width:800, height:700 }}></img>
                    </div>
                   
               </div>
           </div>
         );
    }
}
 
export default Signup;