import React, { Component } from "react";

import { Checkbox } from 'antd';
//import Pack1 from '../Images/pack2.png';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Newsletter', 'Poster design', 'Email promotion'];
const defaultCheckedList = ['Newsletter'];




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

class PackageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
      packageName: null,
      packageType: null,
      features: null,
      packagePrice: null,
      formErrors: {
        packageName: "",
        packageType: "",
        features: "",
        packagePrice: "",
        checkedList:"",
        indeterminate: "",
        checkAll: "",
      }
    };
  }

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };


  handleSubmit = e => {
    e.preventDefault();

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
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "packageType":
        formErrors.packageType =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "features":
        formErrors.features =
        value.length < 3 ? "minimum 3 characaters required" : "";
         
        break;
      case "packagePrice":
        formErrors.packagePrice =
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
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Package</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="packageName">
              <label htmlFor="packageName">Package Name</label>
              <input
                className={formErrors.packageName.length > 0 ? "error" : null}
                placeholder="Package Name"
                type="text"
                name="packageName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.packageName.length > 0 && (
                <span className="errorMessage">{formErrors.packageName}</span>
              )}
            </div>
            <div className="packageType">
              <label htmlFor="packageType">Package Type</label>
              <select className="form-control form-control-sm" onChange={this.handleChange} defaultValue="Select Package">
                        <option defaultValue></option>
                        <option value="silver">Silver</option>
                        <option value="gold">Gold</option>
                        <option value="platinum">Platinum</option>
                    </select><br />
             
              {formErrors.packageType.length > 0 && (
                <span className="errorMessage">{formErrors.packageType}</span>
              )}
            </div>
            <div className="features">
              <label htmlFor="features">Features</label>
             
              <>

              <div className="site-checkbox-all-wrapper">
              <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        
        <CheckboxGroup
          options={plainOptions}
          value={this.state.checkedList}
          onChange={this.onChange}
        />
      </>
            </div>
              {formErrors.features.length > 0 && (
                <span className="errorMessage">{formErrors.features}</span>
              )}


      
            <div className="packagePrice">
              <label htmlFor="packagePrice">Package Price</label>
              <input
                className={formErrors.packagePrice.length > 0 ? "error" : null}
                placeholder="Package Price"
                type="text"
                name="packagePrice"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.packagePrice.length > 0 && (
                <span className="errorMessage">{formErrors.packagePrice}</span>
              )}
            </div>
           


            <div className="submission">
              <button type="submit">CREATE PACKAGE</button>
              
            </div>

            <div className = "img1">
            
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PackageForm;