import React, { Component } from "react";
import { Button } from 'antd';
import sample from "../Images/emp1.jpg";


function EmployeeMiddle() {
    return (
        <div>
        <div className="HomeHeading">
          <p style={{color: "DodgerBlue", fontSize: '30px'}}>
            <center>
            EMPLOYEE MANAGEMENT
            </center>
          </p><br></br>
        </div>
        <div className="HomeImage">
          <p>
            <center>
            <img src={sample} alt="" className="emp-main" />
            </center>
          </p><br></br>
          
        </div>
        <div className="selectpdf">
          <p>
            <center>
            SELECT BUTTON TO GET PDF FILE
            </center>
          </p>
          
        </div>
  
        <div className="row" style={{marginBottom:20,marginLeft:10,marginTop:10}}>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <Button block >Department</Button>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <Button block>Employee Details</Button>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <Button block>Leave Details</Button>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <Button block>Salary Details</Button>
          </div>
        </div>
        </div>
    );
  }
  
export default EmployeeMiddle;
  