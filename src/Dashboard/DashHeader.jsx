import React, { Component } from 'react';
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from 'antd';
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
                title="Title"
                className="site-page-header"
                subTitle="This is a subtitle"
                tags={<Tag color="green">Online</Tag>}
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">
                        Primary
      </Button>,
                ]}
                avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
            >

            </PageHeader>
        );
    }
}
 
export default DashHeader;