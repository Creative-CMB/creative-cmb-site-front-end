import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
    DashboardOutlined,
  UserAddOutlined
} from "@ant-design/icons";
import EventFooter from './EventFooter';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row, Col,Card,Typography ,Affix} from "antd";
import DashHeader from '../Dashboard/DashHeader';
import EventTimeline from './EventTimeline';
import EventSec1 from './EventSec1';
import DashProgressChart from './DashProgressChart';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;


class EventCreate extends Component {
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
                      <Link to="/create-event">Create Event</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/delete-event">Delete Event</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link to="/update-event">Update Event</Link>
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
                      <Link to="/analytics">Downloads</Link>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Row>
                <Col lg={24} md={24} sm={23} xs={24}>
                  <Title style={{ marginBottom: "0rem" }}>
                    EVENT DASHBOARD
                  </Title>
                  <Title
                    level={3}
                    type={"secondary"}
                    style={{ marginTop: "0rem" }}
                  >
                    Create a new event
                  </Title>
                </Col>
              </Row>
              <Row>
                <Col lg={24} md={24} sm={24} xs={24}>
                  <EventSec1 progress={this.progress}/>
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
 
export default EventCreate;