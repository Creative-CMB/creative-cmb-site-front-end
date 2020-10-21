import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import startup_pic from '../Images/startup_pic.png';

class Startup extends Component {
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
                        <div className="container" style={{float:"center", paddingTop: 50, width:500}}>
                            <div className="row shadow p-3 mb-5 bg-white rounded" >
                                
                                <div className="col-lg-12 col-md-12 col-sm-12 col-sm-12 rounded"style={{backgroundColor:"#f0f0f0",height: 300, width: 400}}>
                                    <br/>
                                    <h1><b>New Customer</b></h1> <br/>
                                    <h5>New to Creative CMB? Create an account to get started today</h5> <br/><br/>
                                    <a href="/signup">
                                    <button type="button" className="btn1 btn-primary btn-lg">Create An Account</button></a>
                                </div>

                                <div className="w-100"></div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-sm-12" style={{backgroundColor:"white",height: 30}}></div>
                                <div className="w-100"></div>
                                
                                <div className="col-lg-12 col-md-12 col-sm-12 col-sm-12 rounded" style={{backgroundColor:"#f0f0f0",height: 300, width: 400}}>
                                <br/>
                                    <h1><b>Registered Users</b></h1> <br/>
                                    <h5>Already have an account? Log in now</h5> <br/><br/><br></br>
                                    <a href="/login">
                                    <button type="button" className="btn2 btn-primary btn-lg"> Log In</button></a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 d-none d-md-block" style={{height: 800}}>
                        <img src={startup_pic} style={{paddingTop:75, width:700, height:600 }}></img>
                    </div>
               </div>
           </div>
         );
    }
}
 
export default Startup;