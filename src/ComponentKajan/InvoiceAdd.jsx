/** @format */

import React, { Component } from "react";
import adpic1 from "../Images/adpic1.png";
import { DatePicker, Radio, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { shadows } from '@material-ui/system';
import axios from 'axios'





const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

const cryptoRandomString = require('crypto-random-string')

class InvoiceAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 1,
        invoiceid: cryptoRandomString({length:7}),
        ordername: "",
        paytype:'',
        amount: "",
        status: false,
        date: "",

        formErrors: {
          ordername: "",
          status: "",
          paymenttype: "",
          amount: "",
      },
    };
  }

  

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   const invoData = {
  //     invoice_id : "INV"+this.state.invoiceid,
  //     order_name : this.state.ordername,
  //     amount : this.state.amount,
  //     inv_status : this.state.status,
  //     payment_type : this.state.paytype,
  //     date : this.state.date

  //   }

  //   console.log("shipping data" , invoData)

  //   var url = "http://127.0.0.1:8000/invoice-create/";

  //   fetch(url,{
  //     method: 'POST',
  //     headers:{
  //       'Content-type':'application/json',
  //     },
  //     body: JSON.stringify(invoData)
  //   }).then((response) => {
  //     alert(response.status)
  //   }).catch((err)=> console.log(err))

  //   if (formValid(this.state)) {
  //     console.log(`
  //       --SUBMITTING--
  //       Order Name: ${this.state.ordername}
  //       Amount: ${this.state.amount}
  //       Status: ${this.state.status}
  //       Payment Type: ${this.state.paymenttype}
  //     `);
  //   } else {
  //     console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
  //   }
  // };

  handleChange = (e) => {
    const { name, value } = e.target;


    
  



    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "ordername":
        formErrors.ordername =
          value.length < 3? "Required Data" : "";
        break;
      case "amount":
        formErrors.amount =
          value.length < 3 ? "Required Data" : "";
        break;
        case "paymenttype":
          formErrors.paymenttype =
            value.length < 3? "Required Data" : "";
      
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    this.setState({status: !this.state.status});

    console.log(
      this.state.invoiceid,
      this.state.ordername,
      this.state.paymenttype,
      this.state.status,
      this.state.amount
    );
    console.log(this.state.status);
    
  };



  onCreateInvoice = () => {
    console.log();
  };

  sendData = (e) =>{
    e.preventDefault();
    var stat = '';
    if(this.state.status == true){
      stat = "success"
    }
    else{
      stat="unsuccess"
    }

    const data = {
      invoice_id : "INV" + this.state.invoiceid,
      order_name : this.state.ordername,
      amount : this.state.amount,
      inv_status : stat,
      payment_type : this.state.paytype,
      date : this.state.date
    }

  //   const data =  {
  //     invoice_id: "INV10800",
  //     order_name: "Music Concert Tickets",
  //     amount: 5000.0,
  //     inv_status: "Success",
  //     payment_type: "payhere",
  //     date: "2020-09-08"
  // }

    console.log("shipping data" , data)

    fetch("http://127.0.0.1:8000/invoice-create/",{
      method:'POST',
      headers:{
        'Content-type' : 'application/json',
      },
      body:JSON.stringify(data)
    }).then(res => console.log(res.status)).catch(err => console.log(err))
  }





  

  render(){

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };
  const { value } = this.state;
  
  const { formErrors } = this.state;

  
    return (
      <div>
        <div className='row'>
          <div className=' col-sm-6 col-md-6 col-lg-6'>
            <div class='container py-3'>
              <div class='row'>
                <div class='mx-auto col-sm-12'>
                  <div class='card' style={{height:"500px", top:"80px", boxShadow:"2"}}>
                    
                    <div class='card-body'>
                        <div className="row">
                            <div className="col-md-6 offset-md-4">
                        <h4>Create Invoice</h4>
                        </div>
                        </div>
                      <form onSubmit={this.sendData} class='form'>
                        <div class='row'>
                          <label class='col-lg-6 col-form-label form-control-label'>
                            Order name
                          </label>
                          <div class='col-lg-9'>
                          <input
                className='form-control form-control-sm'
                className={formErrors.ordername.length > 0 ? "error" : null}
                placeholder='Order Name'
                type='text'
                name='ordername'
                noValidate
                onChange={this.handleChange}
              />

              {formErrors.ordername.length > 0 && (
                <span className='errorMessage'>{formErrors.ordername}</span>
              )}
                          </div>
                        </div>
                        <div class='row'>
                          <label class='col-lg-4 col-form-label form-control-label'>
                            Amount
                          </label>
                          

                          <div class='col-sm-9'>
                          <input
                className='form-control form-control-sm'
                className={formErrors.amount.length > 0 ? "error" : null}
                placeholder='Amount'
                type='text'
                name='amount'
                noValidate
                onChange={this.handleChange}
              />

              {formErrors.amount.length > 0 && (
                <span className='errorMessage'>{formErrors.amount}</span>
              )}
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label class='col-lg-6 mt-3 col-form-label form-control-label'>
                            Payment date
                          </label>
                          <div class='col-lg-9 col-md-9 col-sm-9'>
                          <input type="date" id="birthday" name="date" onChange={this.handleChange}/>
                          </div>
                        </div>
                        <div class='form-group row' >
                          <label className='col-lg-6 mt-3 offset-sm-3 col-form-label form-control-label'>
                            Payment type
                          </label>

                          <div class='col-sm-9'>
                          <select
                          name="paytype"
                  className='form-control form-control-sm'
                  onChange={this.handleChange}
                  defaultValue='Select Time Period'
                  style={{position:"relative", left:"50px"}}>
                  <option defaultValue></option>
                  <option value='Pay here'>Pay here</option>
                  <option value='Cash'>Cash</option>
                </select>
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label class='col-lg-6 mt-3 col-form-label form-control-label'>
                            Status
                          </label>
                          
                          <div className="col">
                            
                          <label>Success</label>
                          <input
               
                
                type='radio'
                name='status'
                noValidate
                onChange={this.handleChange}
              />
              </div>
              <div class='col'>
                          
                          <label>UnSuccess</label>
                          <input
               
                
                type='radio'
                name='status'
                noValidate
                onChange={this.handleChange}
              />
              </div>
                
                          </div>
                        
                        <div class='form-group row' >
                          <div className='col-lg-12 offset-sm-4 mt-4' >
                          
                          </div>
                          

                          
                        </div>

                        <input class="btn btn-md btn-primary btn-block mt-3" value="Submit" type="submit"></input>

                        
                        
                        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className='col-sm-9 mt-6 col-md-6 col-lg-6'>
            <img src={adpic1}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default InvoiceAdd;
