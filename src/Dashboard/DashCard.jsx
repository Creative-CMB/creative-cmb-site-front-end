import React, { Component } from 'react';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { Typography } from 'antd';

const { Meta } = Card;
const { Title,Text } = Typography;

class DashCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <Card style={{ marginTop: 16,marginLeft:10 }}>
            <Meta
              avatar={<Avatar size={"large"} src={this.props.img} />}
              title={this.props.title}
            />
            <Title level={2}>{(this, this.props.count)}</Title>
            <Text type="secondary">
              <Avatar size={20} src={this.props.miniIco} />
              &nbsp;&nbsp;
              {this.props.percent}% Since Last Month
            </Text>
          </Card>
        );
    }
}
 
export default DashCard;