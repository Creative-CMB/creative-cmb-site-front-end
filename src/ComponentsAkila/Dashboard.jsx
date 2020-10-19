import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Alert } from 'antd';
import MaterialCard from "./MaterialCard";
import FetchEventChart from "./FetchEventChart";
import Footer from "./EventFooter";
import TimeLine from "./TimeLine";
import StatusTable from "./StatusTable";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Steps } from 'antd';
import PageHeadder from "./PageHeadder"

const { Step } = Steps;


const { Header, Content } = Layout;

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            monthCount:[]
         }
    }
      componentDidMount(){
      document.title = "CreateCMB | Admin Dashboard";
  }

    render() { 
        return ( 
            <div>
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="logo" style={{ width: "120px",height:"31px",background:"rgba(255, 255, 255, 0.2)",margin:"16px 24px 16px 0",float:"left"}} />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                       <Menu.Item key="1" > <Link to="/admin">Events</Link></Menu.Item>
                        <Menu.Item key="2">Tickets</Menu.Item>
                        <Menu.Item key="3"><Link to="/invoice">Payment</Link></Menu.Item>
                            <Menu.Item key="4">User Data</Menu.Item>
                            <Menu.Item key="4"><Link to="/employeeHome">Employee Management</Link></Menu.Item>
                    </Menu>
                    </Header>
                    
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 10 }}>

                            <PageHeadder />
                            <Alert message="Total Events and User Data" type="info" />

                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <MaterialCard/>
                            </div>
                            <div className="col-lg-8">
                                    <FetchEventChart />
                            </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-lg-4">
                                    <Alert message="Last User Actions" type="success" />
                                    <TimeLine />
                                </div>
                                <div className="col-lg-8">
                                     <Alert message="Events Status" type="error" />
                                        <StatusTable />
                                </div>
                       </div>
                    </div>
                    </Content>
                   <Footer/>
                </Layout>
            </div>
         );
    }
}
 
export default Dashboard;