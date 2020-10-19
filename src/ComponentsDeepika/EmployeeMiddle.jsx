import React, { Component } from "react";
import { Button } from 'antd';
import sample from "../Images/emp1.jpg";
import { Link } from "react-router-dom";


function EmployeeMiddle() {
    return (
        <div>
          <br></br>
        <div className="HomeHeading" style={{height:"100%"}}>
          <p style={{color: "DodgerBlue", fontSize: '30px'}}>
            <center>
            EMPLOYEE MANAGEMENT
            </center>
          </p>
        </div>
        <div className="HomeImage">
          <p>
            <center>
            <img src={sample} alt="" className="emp-main" />
            </center>
          </p>
          
        </div>
        <div className="selectpdf">
          <p style={{fontSize:"18px"}}>
            <center>
            SELECT BUTTON TO GET PDF FILE
            </center>
          </p>
          
        </div>
  
        <div className="row" style={{marginBottom:20,marginLeft:10,marginTop:10}}>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <Link to="/departmentPDF"><Button style={{border: "2px solid #008CBA",fontWeight:"bold"}}block >Department</Button></Link>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <Link to="/employeePDF" ><Button style={{border: "2px solid #008CBA",fontWeight:"bold"}} block>Employee Details</Button></Link>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <Link to="/deptmanagerPDF"><Button style={{border: "2px solid #008CBA",fontWeight:"bold"}} block>Department Manager Details</Button></Link>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <Link to="/salaryPDF"><Button style={{border: "2px solid #008CBA",fontWeight:"bold"}} block>Salary Details</Button></Link>
          </div>
        </div>
        </div>
    );
  }
  
export default EmployeeMiddle;
  