import React, { Component } from 'react'
import { PageHeader, Button, Descriptions } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class PageHeadder extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
             <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      title="Welcome to Event Management Admin Page"
      subTitle="Please choose the desired option"
      extra={[
       <Link to="/create"><Button key="3" type="primary">Create New Event</Button></Link>,
        <Link to="/edit"><Button key="3" type="default">Edit the events</Button></Link>,
         <Link to="/edit"><Button key="3" danger>Delete Event</Button></Link>
      ]}
    >
    </PageHeader>
  </div>
         );
    }
}
 
export default PageHeadder;