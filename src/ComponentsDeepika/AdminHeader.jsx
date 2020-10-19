import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Layout,Menu} from 'antd';

const { Header} = Layout;

function AdminHeader() {
        return ( 
            <div>
                <Header style={{ position: 'fixed', zIndex: 1, width: '110%' }}>
                        <div className="logo" style={{ width: "120px",height:"31px",background:"rgba(255, 255, 255, 0.2)",margin:"16px 24px 16px 0",float:"left"}} />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                       <Menu.Item key="1" > <Link to="/admin">Events</Link></Menu.Item>
                        <Menu.Item key="2">Tickets</Menu.Item>
                        <Menu.Item key="3">Payments</Menu.Item>
                            <Menu.Item key="4">User Data</Menu.Item>
                            <Menu.Item key="4"><Link to="/employeeHome">Employee Management</Link></Menu.Item>
                    </Menu>
                </Header>
            </div>
        );
           
    }
export default AdminHeader;