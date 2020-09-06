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
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
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
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
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
            <div className='firstName'>
              <label htmlFor='Ordername'>OrderNo</label>
              <input
                className='form-control form-control-sm'
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder='Order No'
                type='text'
                name='firstName'
                noValidate
                onChange={this.handleChange}
              />

              {formErrors.firstName.length > 0 && (
                <span className='errorMessage'>{formErrors.firstName}</span>
              )}
            </div>
            <div className='form-group'>
              <label for='exampleInputEmail1'>Order Name</label>
              <input
                className='form-control form-control-sm'
                placeholder='Order Name'
                type='email'
                class='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'></input>
            </div>
            <div className='lastName'>
              <label htmlFor='lastName'>Customer Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder='Customer Name'
                type='text'
                name='lastName'
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className='errorMessage'>{formErrors.lastName}</span>
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
           
          

            <div className='password'>
              <label htmlFor='password'>Total Amount</label>
              <input
                className='form-control form-control-sm'
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder='Total Amount'
                type='password'
                name='password'
                noValidate
                onChange={this.handleChange}
              />

              {formErrors.password.length > 0 && (
                <span className='errorMessage'>{formErrors.password}</span>
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
