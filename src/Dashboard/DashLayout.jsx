import React, { Component } from 'react';
import "antd/dist/antd.css";
import './css/dash.css';
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
    DashboardOutlined,
  UserAddOutlined
} from "@ant-design/icons";
import EventFooter from '../ComponentsAkila/EventFooter';
import logo from './images/logo.jpg'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import DashCard from './DashCard';
import users from './images/img1.png';
import evnts from "./images/img2.png";
import ex from "./images/img3.png";
import up from "./images/img4.png";
import arr1 from "./images/up.png";
import arr2 from "./images/down.png";
import arr3 from "./images/right.png";
import arr4 from "./images/side.png";
import DashSalesChart from './DashSalesChart';
import DashChartEx from './DashChartEx';
import DashRecentOrders from './DashRecentOrders';
import DashHeader from './DashHeader';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


class DashLayout extends Component {
  constructor(props) {
    super(props);
      this.state = {
        current: "mail",
      };
  }

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };
    render() {
      const { current } = this.state;
    return (
      <Layout>
        <DashHeader />
        <Content style={{ padding: "0 20px" }}>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider
              breakpoint="sm"
              className="site-layout-background"
              width={200}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                            style={{ height: "100%" }}
                            theme="dark"
              >
                <SubMenu icon={<UserOutlined />} title="User Settings">
                  <Menu.ItemGroup title="My Account">
                    <Menu.Item key="setting:1">Recover Password</Menu.Item>
                    <Menu.Item key="setting:2">My Account</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>

                <SubMenu
                  key="sub1"
                  icon={<DashboardOutlined />}
                  title="Dashboard"
                >
                  <Menu.Item key="1">
                    <Link to="/analytics">Analytics</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/analytics">Management</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/analytics">Advertising</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/analytics">Ticket Booking</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/analytics">Feedbacks</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/analytics">Products & Rentals</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  icon={<LaptopOutlined />}
                  title="Applications"
                >
                  <Menu.Item key="7">
                    <Link to="/analytics">Emails</Link>
                  </Menu.Item>
                  <Menu.Item key="8">
                    <Link to="/analytics">Chat</Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu key="sub3" icon={<LaptopOutlined />} title="Pages">
                  <Menu.Item key="9">
                    <Link to="/analytics">Create Event</Link>
                  </Menu.Item>
                  <Menu.Item key="10">
                    <Link to="/analytics">Edit Event</Link>
                  </Menu.Item>
                  <Menu.Item key="11">
                    <Link to="/analytics">Delete Event</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Row>
                <Col
                  span={6}
                  className="gutter-row"
                  xs={24}
                  sm={24}
                  md={12}
                  lg={6}
                >
                  <DashCard
                    img={users}
                    title="Total Users"
                    count="100"
                    miniIco={arr1}
                    percent="30"
                  />
                </Col>
                <Col
                  span={6}
                  className="gutter-row"
                  xs={24}
                  sm={24}
                  md={12}
                  lg={6}
                >
                  <DashCard
                    img={evnts}
                    title="Total Events to Handle"
                    count="46"
                    miniIco={arr2}
                    percent="24"
                  />
                </Col>
                <Col
                  span={6}
                  className="gutter-row"
                  xs={24}
                  sm={24}
                  md={12}
                  lg={6}
                >
                  <DashCard
                    img={ex}
                    title="Monthly Expenses"
                    count="Rs.145"
                    miniIco={arr3}
                    percent="50"
                  />
                </Col>
                <Col
                  span={6}
                  className="gutter-row"
                  xs={24}
                  sm={24}
                  md={12}
                  lg={6}
                >
                  <DashCard
                    img={up}
                    title="Events in this Month"
                    count="23"
                    miniIco={arr4}
                    percent="60"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={12} lg={15}>
                  <DashSalesChart />
                </Col>
                <Col xs={24} sm={24} md={12} lg={9}>
                    <DashChartEx />
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={12} lg={24}>
                  <DashRecentOrders />
                </Col>
                <Col xs={24} sm={24} md={12} lg={24}> 
                 
                </Col>
              </Row>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <EventFooter />
        </Footer>
      </Layout>
    );
  }
}
 
export default DashLayout;