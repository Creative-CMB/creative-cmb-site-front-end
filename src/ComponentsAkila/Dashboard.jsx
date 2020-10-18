import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Alert } from 'antd';
import MaterialCard from "./MaterialCard";
import FetchEventChart from "./FetchEventChart";
import Footer from "./EventFooter";
import TimeLine from "./TimeLine";


const { Header, Content } = Layout;

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            monthCount:[]
         }
    }

    render() { 
        return ( 
            <div>
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="logo" style={{ width: "120px",height:"31px",background:"rgba(255, 255, 255, 0.2)",margin:"16px 24px 16px 0",float:"left"}} />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" >Events</Menu.Item>
                        <Menu.Item key="2">Tickets</Menu.Item>
                        <Menu.Item key="3">Payments</Menu.Item>
                        <Menu.Item key="4">User Data</Menu.Item>
                    </Menu>
                    </Header>
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 10 }}>
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
                                    <Alert message="Total Events and User Data" type="success" />
                                    <TimeLine />
                                </div>
                                <div className="col-lg-4">
                                        <FetchEventChart />
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