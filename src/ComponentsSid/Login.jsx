import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import login_pic from '../Images/login_pic.png';
import UserDashboard from './UserDashboard';

class Login extends Component {

    state = {
        credentials: {username: '', password: ''},
        status: ''
    }
    
    login = event => {
        event.preventDefault();
        console.log(this.state.credentials);
        
        fetch('http://127.0.0.1:8000/auth/', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(this.state.credentials)})
            .then(data => {
                console.log(data.status)
                if (data.status === 200){
                    this.setState({
                        status: data.status
                    })
                }
            })
            .catch(error => console.error(error))
    }
        
    

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }


    render() { 
        if (this.state.status == '200'){
            return (<UserDashboard/>)            
        }
        else {
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
                                 <div className="row shadow p-3 mb-5 bg-white rounded" >
                                     <form onSubmit={this.login}>
                                         <div className="form-row">
                                             <div className="col">
                                                 <h1><b>Log in to continue</b></h1> <br/>
                                             </div>
                                         </div>
                                         <div className="form-row">
                                             <div className="form-group col-lg-12">
                                                 <input type="text" className="form-control form-control-lg"
                                                     name="username" placeholder="Username"
                                                     value={this.state.credentials.username}
                                                     onChange={this.inputChanged} autoFocus/>
                                                 <br/>
                                             </div>
                                         </div>
                                         <div className="form-row">
                                             <div className="form-group col-lg-12">
                                             <input type="password" className="form-control form-control-lg"
                                                     name="password" placeholder="Password"
                                                     value={this.state.credentials.password}
                                                     onChange={this.inputChanged}/>
                                                 <br/>
                                             </div>
                                         </div>
     
                                         <button type="submit" className="btn btn-primary btn-lg">Login </button>
                                         <small id="loginPrompt" className="form-text text-muted">Not on Creative CMB yet?  <a href="/signup" ><b>Create an account now</b></a> </small>
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
}
 
export default Login;