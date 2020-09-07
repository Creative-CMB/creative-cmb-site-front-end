import React, { Component } from 'react';
import { Result, Button } from 'antd';

class EventSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <Result
    status="success"
    title="Successfully Saved in the Server 👌👌"
    subTitle="Order Identification number is : 2017182818828182881 server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go to Home
      </Button>,
      <Button key="buy">Create anothe event</Button>,
    ]}
  /> );
    }
}
 
export default EventSuccess;