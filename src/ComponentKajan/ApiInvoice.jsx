
/** @format */

import React, { Component } from "react";
import adpic1 from "../Images/adpic1.png";
import { DatePicker, Radio, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { shadows } from '@material-ui/system';
import axios from 'axios'



const cryptoRandomString = require('crypto-random-string')

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



class InvoiceAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
        invoiceid: cryptoRandomString({length:7}),
        ordername: "",
        amount: "",
        status: false,
        paymenttype:'',
        date: "",
        pays:[],
        admins:[],
        admin:"",
        pay:"",

        formErrors: {
          ordername: "",
          status: "",
          paymenttype: "",
          amount: "",
      },
    };
  }

  componentDidMount(){
    this.fetchPayments();
    this.fetchAdmins();
  }

  fetchPayments = () => {
    axios.get("http://127.0.0.1:8000/payment-list/").then(res=>{
      const pays = res.data;
      this.setState({pays});
    })

    // fetch("http://127.0.0.1:8000/events/").then(response => response.json()).then(data => console.log(data))

  }

fetchAdmins = () =>{
  axios.get("http://127.0.0.1:8000/admin-list/").then(res=>
    {
      const admins=res.data;
      this.setState({admins});
    }
  )
}

  handleSubmit = (e) => {
    e.preventDefault();

    const invoData = {
      invoice_id : "INV"+this.state.invoiceid,
      pay_id : "isfsin",
      admin_id : "ifdnsfij",
      order_name : this.state.order_name,
      amount : this.state.order_name,
      inv_status : this.state.status,
      payment_type : this.state.paymenttype,
      date : this.state.date

    }

    console.log(invoData)

    var url = "http://127.0.0.1:8000/invoice-create/";

    fetch(url,{
      method: 'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(invoData)
    }).then((response) => {
      alert(response.headers)
    }).catch(function(err){
      alert(err)
    })

    
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]:e.target.value});
    this.setState({ status: !this.state.status});


    console.log(
      this.state.invoiceid,
      this.state.ordername,
      this.state.paymenttype,
      this.state.status,
      this.state.amount,
      this.state.pay
    );
    console.log(this.state.status);
    console.log(this.state.pay);
  

  
    
    
  };
    



  onCreateInvoice = () => {
    console.log();
  };



  

  render(){

  


  
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
                        <form onSubmit={this.handleSubmit} noValidate></form>
                        </div>
                        </div>
                      <form class='form' role='form'>
                        <div class='row'>
                          <label class='col-lg-6 col-form-label form-control-label'>
                            Order name
                          </label>
                          <div class='col-lg-9'>
                          <input
                className='form-control form-control-sm'
                placeholder='Order Name'
                type='text'
                name='ordername'
                noValidate
                onChange={this.handleChange}
              />

             
                          </div>
                        </div>
                        <div class='row'>
                          <label class='col-lg-4 col-form-label form-control-label'>
                            Amount
                          </label>
                          

                          <div class='col-sm-9'>
                          <input
                className='form-control form-control-sm'
                placeholder='Amount'
                type='text'
                name='amount'
                noValidate
                onChange={this.handleChange}
              />

             
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label class='col-lg-6 mt-3 col-form-label form-control-label'>
                            Payment date
                          </label>
                          <div class='col-lg-9 col-md-9 col-sm-9'>
                          <input type="date" id="date" name="date" onChange={this.handleChange}/>
                          </div>
                        </div>
                        <div class='form-group row' >
                          <label className='col-lg-6 mt-3 offset-sm-3 col-form-label form-control-label'>
                            Payment type
                          </label>

                          <div class='col-sm-9'>
                          <select
                  className='form-control form-control-sm'
                  onChange={this.handleChange}
                  defaultValue='Select Time Period'
                  style={{position:"relative", left:"50px"}}>
                  <option defaultValue></option>
                  <option value='pay1'>Pay here</option>
                  <option value='pay2'>Cash</option>
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
