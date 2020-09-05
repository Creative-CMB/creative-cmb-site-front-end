import React, { Component } from 'react';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import AddEmployees from './AddEmployee';
import EmployeeMiddle from './EmployeeMiddle';

function EmployeeManagementHome(){
    return (
        <div className="row">
  
            <div className="col-lg-1.5 side">
                {/*Navigation bar */}
                <EmployeeSideNavBar />
            </div>
  
            <div className="col main1">
  
              {/*Middle page components */}
                <EmployeeMiddle />
              
              
            </div>
  
        </div>
      );
  }
   
  export default EmployeeManagementHome;