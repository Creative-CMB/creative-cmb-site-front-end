/** @format */

import React, { Component } from "react";
import adpic1 from "../Images/adpic1.png";
import { DatePicker, Radio, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { shadows } from '@material-ui/system';

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


class CreateAdd extends Component {
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


  render(){

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };
  const { value } = this.state;
  
  
  
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
                        <h4>Create Advertisment</h4>
                        </div>
                        </div>
                      <form class='form' role='form'>
                        <div class='row'>
                          <label class='col-lg-6 col-form-label form-control-label'>
                            Customer name
                          </label>
                          <div class='col-lg-9'>
                            <input
                              class='form-control'
                              type='text'
                              value='Jane'></input>
                          </div>
                        </div>
                        <div class='row'>
                          <label class='col-lg-4 col-form-label form-control-label'>
                            Ad title
                          </label>
                          

                          <div class='col-sm-9'>
                          <select
                onChange={this.handleChange}
                className='form-control form-control-sm'
                defaultValue='Select Ad Title'>
                <option defaultValue></option>
                <option value='title1'>Exhibition</option>
                <option value='title2'>Product Launching</option>
                <option value='title3'>Music Concert</option>
                <option value='title4'>Product Anniversary</option>
                <option value='title5'>Other</option>
              </select>
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label class='col-lg-6 mt-3 col-form-label form-control-label'>
                            Advertising date
                          </label>
                          <div class='col-lg-9 col-md-9 col-sm-9'>
                          < DatePicker/>
                          </div>
                        </div>
                        <div class='form-group row' >
                          <label className='col-lg-6 mt-3 offset-sm-3 col-form-label form-control-label'>
                            Duration
                          </label>

                          <div class='col-sm-9'>
                          <select
                  className='form-control form-control-sm'
                  onChange={this.handleChange}
                  defaultValue='Select Time Period'
                  style={{position:"relative", left:"50px"}}>
                  <option defaultValue></option>
                  <option value='dur1'>3 days</option>
                  <option value='dur2'>1 week</option>
                  <option value='dur3'>2 months</option>
                </select>
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label class='col-lg-6 mt-3 col-form-label form-control-label'>
                            Package Type
                          </label>
                          <div class='col'>
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
                          </div>
                        </div>
                        <div class='form-group row' >
                          <div className='col-lg-12 offset-sm-4 mt-4' >
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

export default CreateAdd;
