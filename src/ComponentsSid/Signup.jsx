import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import signup_pic from '../Images/signup_pic.webp';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
}


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputFName: null,
            inputLName: null,
            inputMobileNo: null,
            inputEmail: null,
            inputPassword: null,
            errors: {
                inputFName: '',
                inputLName: '',
                inputMobileNo: '',
                inputEmail: '',
                inputPassword: ''
            }
        };
    }   

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
            case 'inputFName': 
            errors.inputFName = 
              value.length < 5
                ? 'First Name must be 5 characters long!'
                : '';
            break;
            case 'inputLName': 
            errors.inputLName = 
              value.length < 5
                ? 'Last Name must be 5 characters long!'
                : '';
            break;   
            case 'inputMobileNo': 
            errors.inputMobileNo = 
              value.length < 10 || value.length > 10
                ? 'Mobile Number must be 10 characters long!'
                : '';
            break; 
            case 'inputEmail': 
            errors.inputEmail = 
            validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;   
            case 'inputPassword': 
            errors.inputPassword = 
            value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
            break;   
            default:
            break;
        }
    
        this.setState({errors, [name]: value});
    }


    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        }else{
          console.error('Invalid Form')
        }
      }


    render() { 
        const {errors} = this.state;
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

                                <form onSubmit={this.handleSubmit} noValidate>

                                <form onSubmit={this.submitdata}>

                                    <div class="form-row">
                                        <div class="col">
                                            <h1><b>Create an account</b></h1> <br/>
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="col-md-6">
                                            <input type="text" class="form-control form-control-lg" name="inputFName" placeholder="First name"
                                                required onChange={this.handleChange} noValidate/>
                                            {errors.inputFName.length > 0 && 
                                                <span style={{color:"red"}} className='error'>{errors.inputFName}</span>}
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" class="form-control form-control-lg" name="inputLName" placeholder="Last name"
                                                required onChange={this.handleChange} noValidate/>
                                            {errors.inputLName.length > 0 && 
                                                <span style={{color:"red"}} className='error'>{errors.inputLName}</span>}
                                            <br/>
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <input type="number" class="form-control form-control-lg" name="inputMobileNo" placeholder="Mobile Number"
                                                pattern="^\d{4}-\d{3}-\d{4}$" onChange={this.handleChange}  noValidate required
                                                
                                                />
                                            {errors.inputMobileNo.length > 0 && 
                                                <span style={{color:"red"}} className='error'>{errors.inputMobileNo}</span>}
                                            <br/>
                                        </div>
                                    </div>
                                  
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <input type="email" class="form-control form-control-lg" name="inputEmail" placeholder="Email Address"
                                                onChange={this.handleChange}  noValidate required
                                                
                                                />
                                            {errors.inputEmail.length > 0 && 
                                                <span style={{color:"red"}} className='error'>{errors.inputEmail}</span>}
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="password" class="form-control form-control-lg" name="inputPassword" placeholder="Password"
                                                onChange={this.handleChange}  noValidate required
                                                
                                                />
                                            {errors.inputPassword.length > 0 && 
                                                <span style={{color:"red"}} className='error'>{errors.inputPassword}</span>}
                                        </div>
                                    </div>
                                   
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="inputDOB"><h5><b>Date of Birth</b></h5></label>
                                            <input class="form-control form-control-lg" type="date" value="" name="inputDOB"
                                            
                                            />
                                        </div>
                                    </div>


                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputCity"><h5><b>City</b></h5></label>
                                            <input type="text" class="form-control form-control-lg" name="inputCity"
                                            
                                            />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputDistrict"><h5><b>District</b></h5></label>
                                            <input type="text" class="form-control form-control-lg" name="inputDistrict"
                                            
                                            />
                                        </div>
                                    </div>
                                    <button type="submit"  class="btn btn-primary btn-lg">Sign in </button>
                                    
                                    <small id="loginPrompt" class="form-text text-muted">Already have an account? <a href="/login" ><b>Login</b></a> </small>
                                
                                </form>
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