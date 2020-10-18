/** @format */

import React, { Component } from "react";
import adpic1 from "../Images/adpic1.png";
import blue from '../Images/blue.jpg';
import { DatePicker, Radio, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { shadows } from '@material-ui/system';

import axios from "axios";
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

class CreateAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advertisementId: cryptoRandomString({length:7}),  
      packageType: "",
      advertisingDate: "",
      duration: "",
      adTitle: "",
      formErrors: {
        packageType: "",
        advertisingDate: "",
        duration: "",
        adTitle: "",
      },
    };
  }

  

  

  handleSubmit = e =>{
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
    this.setState({packageType: !this.state.packageType});


    const advData = {
      ad_id : "ADV"+this.state.advertisementId,
      duration : this.state.duration,
      date : this.state.advertisingDate,
      ad_type : this.state.packageType,
      ad_title : this.state.adTitle,
    }

    console.log("ship",advData)

    var url = "http://127.0.0.1:8000/advertisement-create/";

    fetch(url,{
      method:'POST',
      headers:{
        'Content-type' : 'application/json',
      },
      body:JSON.stringify(advData)
    }).then((response) => {
      console.log(response.status)
    }).catch(function(err){
      console.log(err)
    })


  if (formValid(this.state)){
    console.log(`
      --SUBMITTING--
      Duration: ${this.state.duration}
      Advertisement Title: ${this.state.adTitle}
      Package Type : ${this.state.packageType}
     `);
  }else{
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  

  handleChange = e =>{
    e.preventDefault();
    const {name,value} = e.target;
    let formErrors = {...this.state.formErrors};

    switch (name) {
      case "duration":
        formErrors.duration =
          value.length < 3 ? "maximum 10 characaters required" : "";
        break;
      
     
      case " adTitle":
        formErrors. adTitle =
          value.length < 3 ? "minimum 25 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    this.setState({status: !this.state.packageType});
    


    console.log(
      this.state.advertisementId,
      this.state.duration,
      this.state.packageType,
      this.state.adTitle
    );
    console.log(this.state.packageType);
  
  };

  onCreateAdvertisement = () => {
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
        <div class='back'>
        <img style={{position:"relative",width:"100%"}} src={blue}></img>
        <div className='row'>
          <div className=' col-sm-6 col-md-6 col-lg-6'>
            <div class='container py-3'>
              <div class='row'>
                <div class='mx-auto col-sm-12'>
                  <div class='card' style={{ height:"800px",right:"-220px", top:"-1050px", boxShadow:"2"}}>
                    
                    <div class='card-body'>
                        <div className="row">
                            <div className="col-md-6 offset-md-4" style={{fontFamily:"cursive"}}>
                        <h4>Create Advertisment</h4>
                        </div>
                        </div>
                        <form class='form' role='form' onSubmit={this.handleSubmit}>
                     
                        <label class='col-lg-6 col-form-label mt-3 form-control-label'>
                          Advertisement Title
                        </label>
                        <div class='col-lg-9 '>
                          <input className='form-control form-control-sm'
                          className={formErrors.adTitle.length > 0 ? "error" : null}
                            class='form-control'
                            type='text'
                            placeholder="Summer"
                            name='adTitle'
                            noValidate
                            onChange={this.handleChange}/>
                            
                            {formErrors.adTitle.length > 0 && (
                <span className='errorMessage'>{formErrors.adTitle}</span>
              )}
            </div>
                        <div class='form-group row'>
                          <label class='col-lg-6 mt-3 col-form-label form-control-label' style={{fontFamily:"initial", fontSize:"20px"}}>
                            Advertising date
                          </label>
                          <div class='col-lg-9 col-md-9 col-sm-9'>
                          < input type="date" name="advertisingDate" onChange={this.handleChange}/>
                          </div>
                        </div>
                        <div class='form-group row' >
                          <label class='col-lg-6 mt-3 col-form-label form-control-label' style={{fontFamily:"initial", fontSize:"20px"}}>
                            Duration
                          </label>

                          <div class='col-lg-9 col-md-9 col-sm-9'>
                          <select
                  
                  onChange={this.handleChange}
                  className='form-control form-control-sm'
                  name="duration"
                  style={{position:"relative", left:"3px"}}>
                  <option defaultValue="Select time period"></option>
                  <option value='3 days'>3 days</option>
                  <option value='1 week'>1 week</option>
                  <option value='2 months'>2 months</option>
                </select>
                          </div>
                        </div>
                        <div class='form-group row'>
                        <label class='col-sm-3 mt-4 col-form-label' style={{fontFamily:"initial", fontSize:"20px"}}>
                         Package Type
                        </label>
                        <div className='col mt-5'>
                        
                        <input
                        type='radio'
                        name=' packageType'
                        value="silver"
                        noValidate
                        onChange={this.handleChange}/><label>Silver</label>
                        </div>
                        <div class='col mt-5'>
                        
                        <input
                        type='radio'
                        name='packageType'
                        value="gold"
                        noValidate
                        onChange={this.handleChange}/><label>Gold</label>
                        </div>
                        <div class='col mt-5 '>
                        
                        <input
                        type='radio'
                        name='packageType'
                        value="platinum"
                        noValidate
                        onChange={this.handleChange}/><label>Platinum</label>
                        </div>
                        
                        

                        <input class="btn btn-md btn-primary btn-block mt-3" value="Submit" type="submit"></input>

                        
                        
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div
            className='col-sm-6 mt-4 col-md-6 col-lg-6'>
            <img style={{position:"relative",top:"-1700px",right:"-900px",width:"80%"}} src={adpic1}></img>
          </div>
        </div>
    </div>
    );
  }
}

export default CreateAdd;
