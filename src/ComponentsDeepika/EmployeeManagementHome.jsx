import React, { Component } from 'react';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import AddEmployees from './AddEmployee';
import EmployeeMiddle from './EmployeeMiddle';

function EmployeeManagementHome(){
    return (
        <div className="row">
  
            <div className="col-lg-1.5 side" style={{backgroundColor:"LightBlue", height:"700px"}}>
                {/*Navigation bar */}
                <br></br>
                <EmployeeSideNavBar />
            </div>
  
            <div className="col main1" style={{height:"100%"}}>
  
              {/*Middle page components */}
                <EmployeeMiddle />
              
              
            </div>
  
        </div>
      );
  }
   
  export default EmployeeManagementHome;