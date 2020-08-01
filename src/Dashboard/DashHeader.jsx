import React, { Component} from 'react';
import {
  PageHeader,
  Menu,
  Dropdown,
  Button,
  Tag,
  Typography,
  Row,
  Col,
} from "antd";
import { EllipsisOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;



class DashHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        return (
          <PageHeader
            title="M.L.Akila Liyanage"
            className="site-page-header"
            subTitle="Admin-Marketing"
            tags={<Tag color="blue">Online</Tag>}
            extra={[
              <Row>
                <Col sm={12} lg={0} xs={12}>
                  <Button key="2" onClick={this.props.showDrawer}>
                    open
                  </Button>
                </Col>
                ,
                <Col>
                  {" "}
                  <Button key="1" type="primary">
                    Log Out
                  </Button>
                </Col>
              </Row>,
            ]}
            avatar={{
              src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
            }}
          ></PageHeader>
        );
    }
}
 
export default DashHeader;