import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class EmployeeSideNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                
                    <Menu
                    mode="inline"
                    style={{ height: "50%", margin: "0", borderRight: "360", background: "LightBlue",justifyContent: "center"}}
                    >
                    
                    
                    <h1 style={{color: "black", fontSize: '20px',textAlign:"center",}}><Link to="/employeeHome" >Employee Home</Link></h1><br></br>
                    <SubMenu style={{padding:0,margin:0,textAlign:"left"}} key="sub1" icon={<UserOutlined />} title="Emplyee Details">
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="1"><Link to="/addEmployee" >Add Employees</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="2"><Link to="/viewemp" >View Employees</Link></Menu.Item>
                        
                    </SubMenu>
                    <SubMenu style={{padding:0,margin:0,textAlign:"left"}}  key="sub2" icon={<LaptopOutlined />} title="Department">
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="3"><Link to="/addDepartment" >Add Departments</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="4"><Link to="/viewdept" >View Departments</Link></Menu.Item>
                        </SubMenu>
                    <SubMenu style={{padding:0,margin:0,textAlign:"left"}}  key="sub3" icon={<UserOutlined />} title="Managers">
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="5"><Link to="/addDeptManager" >Add Managers</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="6"><Link to="/viewdeptmanag" >View Managers</Link></Menu.Item>
                        </SubMenu>
                    <SubMenu style={{padding:0,margin:0,textAlign:"left"}}  key="sub4" icon={<UserOutlined />} title="Supervisors">
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="7"><Link to="/addDeptSupervisor" >Add Supervisors</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="8"><Link to="/viewdeptsuper" >View Supervisors</Link></Menu.Item>
                        </SubMenu>
                    <SubMenu style={{padding:0,margin:0,textAlign:"left"}}  key="sub5" icon={<UserOutlined />} title="Employees">
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="9"><Link to="/addDeptEmployee" >Add Employees</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="10"><Link to="/viewdeptemp" >View Employees</Link></Menu.Item>
                        </SubMenu>
                    <SubMenu style={{padding:0,margin:0,textAlign:"left"}}  key="sub7" icon={<UserOutlined />} title="Salary Details">
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="13"><Link to="/addSalary" >Add Salary</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="14"><Link to="/viewsalary" >View Salary</Link></Menu.Item>
                         </SubMenu>
                    </Menu>
            </div>
         );
    }
}
 
export default EmployeeSideNavBar;