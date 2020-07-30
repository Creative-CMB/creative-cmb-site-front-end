import React, { Component } from 'react';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { Typography } from 'antd';
import { Statistic, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
const { Meta } = Card;
const { Title,Text } = Typography;

class DashCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <Card
            style={{ marginTop: 3, marginLeft: 10 }}
            className="site-statistic-demo-card"
          >
            <Meta
              avatar={<Avatar size={"large"} src={this.props.img} />}
              title={this.props.title}
            />
            <p className="dash-card-count">{(this, this.props.count)}</p>
            <Statistic
              value={9.1}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        );
    }
}
 
export default DashCard;