import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import login_pic from '../Images/login_pic.png';

class Login extends Component {
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
                    <div className="col-lg-6 col-md-6 col-sm-12 col-sm-12" style={{backgroundColor:"white",height: 800}}>
                        <div className="container" style={{float:"center", paddingTop: 200, width:500}}>
                            <div class="row shadow p-3 mb-5 bg-white rounded" >
                                <form>
                                    <div class="form-row">
                                        <div class="col">
                                            <h1><b>Log in to continue</b></h1> <br/>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-12">
                                            <input type="email" class="form-control form-control-lg" id="inputEmail" placeholder="Email Address"
                                                 autoFocus/>
                                            <br/>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-12">
                                            <input type="password" class="form-control form-control-lg" id="inputPassword" placeholder="Password"/>
                                            <br/>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-lg">Login in </button>
                                    <small id="loginPrompt" class="form-text text-muted">Not on Creative CMB yet?  <a href="/signup" ><b>Create an account now</b></a> </small>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 d-none d-md-block" style={{height: 800}}>
                        <img src={login_pic} style={{paddingTop:200, width:700, height:700 }}></img>
                    </div>
               </div>
           </div>
         );
    }
}
 
export default Login;