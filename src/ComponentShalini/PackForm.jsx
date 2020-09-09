/** @format */

import React, { Component } from "react";
import { Radio, message } from "antd";
import packing from '../Images/pack2.png';
import { Checkbox } from 'antd';
import axios from 'axios';
import NavApp from "../ComponentKajan/NavApp";




const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

const cryptoRandomString = require('crypto-random-string')

class PackForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      packageid: cryptoRandomString({length:7}),
      packageName: "",
      packageType: "",
      features: "",
      packagePrice: 0.00,
      admins:[],
      admin:"",
      formErrors: {
        packageName: "",
        packageType: "",
        features: "",
        packagePrice: "",
        
      }
    };
  }

  componentDidMount(){
    this.fetchAdmins();
  }

  fetchAdmins = () =>{
    axios.get("http://127.0.0.1:8000/admin-list/").then(res=>
      {
        const admins=res.data;
        this.setState({admins});
      }
    )
  }


  handleSubmit = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ features: !this.state.features });




    const pkgData = {
        pack_id : "PKG"+this.state.packageid,
        pack_name : this.state.packageName,
        price : this.state.packagePrice,
        featuers: this.state.features,
        pack_type : this.state.packageType,
  
      }
  
      console.log("ship",pkgData)
  
      var url = "http://127.0.0.1:8000/package-create/";
  
      fetch(url,{
        method: 'POST',
        headers:{
          'Content-type':'application/json',
        },
        body: JSON.stringify(pkgData)
      }).then((response) => {
        console.log(response.status)
      }).catch(function(err){
        console.log(err)
      })
  
  

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Package Name: ${this.state.packageName}
        Package Type: ${this.state.packageType}
        Features: ${this.state.features}
        Package Price: ${this.state.packagePrice}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "packageName":
        formErrors.packageName =
          value.length > 3 ? "maximum 10 characaters required" : "";
        break;
      case "packageType":
        formErrors.packageType =
          value.length < 10 ? "maximum 10 characaters required" : "";
        break;
      case "features":
        formErrors.features =
        value.length < 25 ? "minimum 25 characaters required" : "";
         
        break;
      case "packagePrice":
        formErrors.packagePrice =
          value.length < 6 ? "only float values are required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    this.setState({status: !this.state.features});

    console.log(
        this.state.packageid,
        this.state.packagename,
        this.state.packagetype,
        this.state.features,
        this.state.packageprice
      );
      console.log(this.state.features);

  };

  onCreatePackage = () => {
    console.log();
  };

  render() {

    const radioStyle = {
        display: "block",
        height: "30px",
        lineHeight: "50px",
      };

      const { value } = this.state;

    const { formErrors } = this.state;

    return (
        
      <div>
        <div>
          < NavApp/>
        </div>
      <div className='row'>
        <div className=' col-sm-6 col-md-6 col-lg-6'>
          <div class='container py-3'>
            <div class='row'>
              <div class='mx-auto col-sm-12'>
                <div class='card' style={{height:"500px", top:"80px",right:"-20px"}}>
                <span class="border border-primary"></span>

        
                  <div class='card-body'>
                      <div className="row">
                          <div className="col-md-6 offset-md-4">
                      <h4>Create Package</h4>
                      
                      </div>
                      </div>
                    <form class='form' role='form' onSubmit={this.handleSubmit}>
                      <div class='row'>
                        <label class='col-lg-6 col-form-label mt-3 form-control-label'>
                          Package name
                        </label>
                        <div class='col-lg-9 '>
                          <input className='form-control form-control-sm'
                          className={formErrors.packageName.length > 0 ? "error" : null}
                            class='form-control'
                            type='text'
                            placeholder="Summer"
                            name='packageName'
                            noValidate
                            onChange={this.handleChange}/>
                            
                            {formErrors.packageName.length > 0 && (
                <span className='errorMessage'>{formErrors.packageName}</span>
              )}
            </div>
                        
                        </div>
                      
                      <div class='row'>
                        <label class='col-lg-4  col-form-label form-control-label'>
                            Package Type
                        </label>
                        

                        <div class='col-sm-9'>
                        <select
              onChange={this.handleChange}
              className='form-control form-control-sm'
              defaultValue='Select Package Type' name="packageType">
              <option defaultValue='Select package type'></option>
              <option value='Silver'>Silver</option>
              <option value='Gold'>Gold</option>
              <option value='Platinum'>Platinum</option>
              
            </select>
            </div>
            </div>
            
                      <div class='row'>
                        <label class='col-lg-4 col-form-label form-control-label'>
                          Package price
                        </label>
                        <div class='col-sm-9'>
                          <input className='form-control form-control-sm'
                          className={formErrors.packagePrice.length > 0 ? "error" : null}
                            class='form-control'
                            type='text'
                            placeholder="8000.00"
                            name='packagePrice'
                            noValidate
                            onChange={this.handleChange}/>

{formErrors.packagePrice.length > 0 && (
                <span className='errorMessage'>{formErrors.packagePrice}</span>
              )}
            </div>
                   
                    
                      </div>
                      <div class='form-group row'>
                        <label class='col-sm-3 mt-4 col-form-label'>
                          Features
                        </label>
                        <div className='col mt-5'>
                        
                        <input
                        type='radio'
                        name='features'
                        value="email"
                        noValidate
                        onChange={this.handleChange}/><label>Email promotion</label>
                        </div>
                        <div class='col mt-5'>
                        
                        <input
                        type='radio'
                        name='features'
                        value="newsletter"
                        noValidate
                        onChange={this.handleChange}/><label>Newsletter</label>
                        </div>
                        <div class='col mt-5 '>
                        
                        <input
                        type='radio'
                        name='features'
                        value="poster design"
                        noValidate
                        onChange={this.handleChange}/><label>Poster design</label>
                        </div>
                        
                      
                      
                      
                      

                      <input class="mt-5 btn btn-md btn-primary btn-block mt-3" value="CREATE PACKAGE" type="submit"></input>

       
                    </div></form>
                    </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    
    
        <div
            className='col-sm-9 mt-6 col-md-6 col-lg-6'>
                <img style={{position:"relative",top:"80px",right:"-40px",width:"80%"}} src={packing}></img>
          </div>
        </div>
      </div>

    
  );
}
}
export default PackForm;