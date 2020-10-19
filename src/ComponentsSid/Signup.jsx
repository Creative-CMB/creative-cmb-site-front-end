import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import signup_pic from '../Images/signup_pic.webp';
import Login from './Login';

class Signup extends Component {
    state = {
        credentials: {username: '', password: ''},
        status: ''
    }
    
    register = e => {
        e.preventDefault();            
        fetch('http://127.0.0.1:8000/register/', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(this.state.credentials)})
        .then(data => {
            if (data.status === 201){
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
                
        if (this.state.status == '201'){
            return (<Login/>)            
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
     
     
                         <div className="col-lg-6 col-md-6 col-sm-12 col-xm-8" style={{backgroundColor:"white",height: 800}}>
                             <div className="container" style={{float:"center", paddingTop: 240, width:500}}>
                                 <div className="row shadow p-3 mb-5 bg-white rounded" >
                                     <form onSubmit={this.register} >
                                         <div className="form-row">
                                             <div className="col">
                                                 <h1><b>Create an account</b></h1> <br/>
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
     
                                         <button type="submit" className="btn btn-primary btn-lg">Sign in </button>
                                         <small id="registerPrompt" className="form-text text-muted">Already have an account? <a href="/login" ><b>Login</b></a> </small>
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
}
 
export default Signup;