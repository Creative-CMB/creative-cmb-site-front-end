import React, { Component } from 'react';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import AddEmployees from './AddEmployee';
import EmployeeMiddle from './EmployeeMiddle';
import AdminHeader from './AdminHeader';

function EmployeeManagementHome(){
    return (
        <div className="row">
                <AdminHeader/>
            <div className="col-lg-1.5 side" style={{backgroundColor:"LightBlue", height:"650px"}}>
                {/*Navigation bar */}
                <br></br><br></br><br></br>
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