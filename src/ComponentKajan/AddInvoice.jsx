/** @format */

import React, { Component } from "react";
import { DatePicker, Space, Form, Menu, Dropdown, Button, Col,Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Ellipse21 from "../Images/Ellipse 21.png";
import Ellipse22 from "../Images/Ellipse 22.png";
import Ellipse20 from "../Images/Ellipse 20.png";
import Ellipse19 from "../Images/Ellipse 19.png";


function onChange(date, dateString) {
  console.log(date, dateString);
}

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

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

class AddInvoice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ordername: null,
      amount: null,
      status: null,
      paymenttype:null,
      date: null,
      formErrors: {
        ordername: "",
        status: "",
        paymenttype: "",
        amount: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Order Name: ${this.state.ordername}
        Amount: ${this.state.amount}
        Status: ${this.state.status}
        Payment Type: ${this.state.paymenttype}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
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
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h1>Add Invoice</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='ordername'>
              <label htmlFor='Ordername'>Order Name</label>
              <input
                className='form-control form-control-sm'
                className={formErrors.ordername.length > 0 ? "error" : null}
                placeholder='Order No'
                type='text'
                name='ordername'
                noValidate
                onChange={this.handleChange}
              />

              {formErrors.ordername.length > 0 && (
                <span className='errorMessage'>{formErrors.ordername}</span>
              )}
            </div>
            
            <div className='lastName'>
              <label htmlFor='lastName'>Customer Name</label>
              <input
                className={formErrors.amount.length > 0 ? "error" : null}
                placeholder='Customer Name'
                type='text'
                name='amount'
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.amount.length > 0 && (
                <span className='errorMessage'>{formErrors.amount}</span>
              )}
            </div>
            <br></br>
                
              
            <select class='custom-select'>
              <option selected>Payment Type</option>
              <option value='1'>Paypal</option>
              <option value='2'>Cash</option>
            </select>
            
            
                
            <Space direction="vertical">
            <DatePicker onChange={onChange} />
            </Space>
           
            <div className='ordername'>
              <label htmlFor='Ordername'>Amount</label>
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

            

              
            
                <lable>Status</lable>
                <div className="col-lg-9">
            <div class="custom-control custom-radio" >
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadio1">Success</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadio2">UnSuccess</label>
</div>
</div>

                <div className="row">
                  <div className="col-lg-12 offset-sm-6 mt-3">
                  
            <Button type='primary' block>
              Submit
            </Button>
            </div>
            </div>
            

            <div className='Elli'>
              <img
                src={Ellipse22}
                class='img-fluid'
                alt='Responsive image'></img>
            </div>
            <div className='Elli1'>
              <img
                src={Ellipse21}
                class='img-fluid'
                alt='Responsive image'></img>
            </div>

            <div className='Elli2'>
              <img
                src={Ellipse20}
                class='img-fluid'
                alt='Responsive image'></img>
            </div>
            <div className='Elli3'>
              <img
                src={Ellipse19}
                class='img-fluid'
                alt='Responsive image'></img>
            </div>
          </form>
        </div>
      </div>
    );    
  }
}

export default AddInvoice;
