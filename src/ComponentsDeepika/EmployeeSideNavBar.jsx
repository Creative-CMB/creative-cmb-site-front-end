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
                    style={{ height: "100%", margin: "0", borderRight: "200", background: "LightBlue",justifyContent: "center"}}
                    >
                    <h1 style={{color: "black", fontSize: '20px'}}><center><Link to="/employeeHome" >Employee Home</Link></center></h1><br></br>
                    <SubMenu style={{padding:0,margin:0,textAlign:"left"}} key="sub1" icon={<UserOutlined />} title="Emplyee Details">
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="1"><Link to="/addEmployee" >Add Employees</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="2"><Link to="/" >View Employees</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="3"><Link to="/" >Delete Employees</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="4"><Link to="/" >Edit Employees</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu style={{padding:0,margin:0,textAlign:"left"}}  key="sub2" icon={<LaptopOutlined />} title="Department">
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="5"><Link to="/addDepartment" >Add Departments</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="6"><Link to="/" >View Departments</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="7"><Link to="/" >Delete Departments</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="8"><Link to="/" >Edit Departments</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu style={{padding:0,margin:0,textAlign:"left"}}  key="sub3" icon={<UserOutlined />} title="Managers">
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="9"><Link to="/addDeptManager" >Add Managers</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="10"><Link to="/" >View Managers</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="11"><Link to="/" >Delete Managers</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="12"><Link to="/" >Edit Managers</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu style={{padding:0,margin:0,textAlign:"left"}}  key="sub4" icon={<UserOutlined />} title="Supervisors">
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="13"><Link to="/addDeptSupervisor" >Add Supervisors</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="14"><Link to="/" >View Supervisors</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="15"><Link to="/" >Delete Supervisors</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="16"><Link to="/" >Edit Supervisors</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu style={{padding:0,margin:0,textAlign:"left"}}  key="sub5" icon={<UserOutlined />} title="Employees">
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="17"><Link to="/addDeptEmployee" >Add Employees</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="18"><Link to="/" >View Employees</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="19"><Link to="/" >Delete Employees</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="20"><Link to="/" >Edit Employees</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu style={{padding:0,margin:0,textAlign:"left"}}  key="sub6" icon={<UserOutlined />} title="Leave Details">
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="21"><Link to="/addLeave" >Add Leave</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="22"><Link to="/" >View Leave</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="23"><Link to="/" >Delete Leave</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="24"><Link to="/" >Edit Leave</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu style={{padding:0,margin:0,textAlign:"left"}}  key="sub7" icon={<UserOutlined />} title="Salary Details">
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="25"><Link to="/addSalary" >Add Salary</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="26"><Link to="/" >View Salary</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="27"><Link to="/" >Delete Salary</Link></Menu.Item>
                        <Menu.Item style={{padding:0,margin:0,textAlign:"left", background: "azure"}}key="28"><Link to="/" >Edit Salary</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
            </div>
         );
    }
}
 
export default EmployeeSideNavBar;