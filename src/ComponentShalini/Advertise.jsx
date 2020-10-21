/** @format */

import React, { Component } from "react";

import { Radio, Input, DatePicker, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "./Css/shali.css";



const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

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

class AdForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1,
      customerName: null,
      packageType: null,
      advertisingDate: null,
      duration: null,
      adTitle: null,
      formErrors: {
        customerName: "",
        packageType: "",
        advertisingDate: "",
        duration: "",
        adTitle: "",
      },
    };
  }

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Customer Name: ${this.state.customerName}
        Package Type: ${this.state.packageType}
        Advertising Date: ${this.state.advertisingDate}
        Duration: ${this.state.duration}
        Ad Title: ${this.state.adTitle}
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
      case "customerName":
        formErrors.customerName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "packageType":
        formErrors.packageType =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "advertisingDate":
        formErrors.advertisingDate =
          value.length < 3 ? "minimum 3 characaters required" : "";

        break;
      case "duration":
        formErrors.duration =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      case "adTitle":
        formErrors.adTitle =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
    };
    const { value } = this.state;

    return (
      <div className='form-wrapper1'>
        <h1>Create Advertisement</h1>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className='row'>
            <div className='col-lg-8-ml-9'>
              <div className='customerName'>
                <label htmlFor='customerName'>Customer Name</label>
                <input
                  className={
                    formErrors.customerName.length > 0 ? "error" : null
                  }
                  placeholder='Customer Name'
                  type='text'
                  name='customerName'
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.customerName.length > 0 && (
                  <span className='errorMessage'>
                    {formErrors.customerName}
                  </span>
                )}
              </div>
            </div>

            <div className='col-lg'>
              <div className='packageType'>
                <label htmlFor='packageType'>Package Type</label>

                <Radio.Group onChange={this.onChange} value={value}>
                  <Radio style={radioStyle} value={1}>
                    Silver
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    Gold
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    Platinum
                  </Radio>
                </Radio.Group>

                {formErrors.packageType.length > 0 && (
                  <span className='errorMessage'>{formErrors.packageType}</span>
                )}
              </div>
            </div>
            </div>

            <div className='col-lg-6'>
              <div className='advertisingDate'>
                <label htmlFor='advertisingDate'>Advertising Date</label>
                <DatePicker />
                {formErrors.advertisingDate.length > 0 && (
                  <span className='errorMessage'>
                    {formErrors.advertisingDate}
                  </span>
                )}
              </div>
              <div className='col-lg-20'>

              <div className='duration'>
                <label htmlFor='duration'>Duration</label>
                <select
                  className='form-control form-control-sm'
                  onChange={this.handleChange}
                  defaultValue='Select Time Period'>
                  <option defaultValue></option>
                  <option value='dur1'>3 days</option>
                  <option value='dur2'>1 week</option>
                  <option value='dur3'>2 months</option>
                </select>
                <br />
                {formErrors.duration.length > 0 && (
                  <span className='errorMessage'>{formErrors.duration}</span>
                )}
              </div>
            </div>
            </div>

            <div class="row mx-md-n5">
  <div class="col px-md-5"><div class="p-3 border bg-light">Custom column padding</div></div>
  <div class="col px-md-5"><div class="p-3 border bg-light">Custom column padding</div></div>
</div>


            <div className='col-lg-6'>

            <div className='adTitle'>
              <label htmlFor='adTitle'>Ad Title</label>
              <select
                className='form-control form-control-sm'
                onChange={this.handleChange}
                defaultValue='Select Ad Title'>
                <option defaultValue></option>
                <option value='title1'>Exhibition</option>
                <option value='title2'>Product Launching</option>
                <option value='title3'>Music Concert</option>
                <option value='title4'>Product Anniversary</option>
                <option value='title5'>Other</option>
              </select>
              <br />
              {formErrors.adTitle.length > 0 && (
                <span className='errorMessage'>{formErrors.adTitle}</span>
              )}
            </div>
            </div>
                <div className="dragger">
                <div className="row">
            <div className='col-lg-10'>
            <Dragger {...props}>
              <p className='ant-upload-drag-icon'>
                <InboxOutlined />
              </p>
              <p className='ant-upload-text'>
                Click or drag file to this area to upload
              </p>
            </Dragger>
            </div>
            </div>
            </div>
          

          <div className='submission'>
            <button type='submit'>CREATE ADVERTISEMENT</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AdForm;
