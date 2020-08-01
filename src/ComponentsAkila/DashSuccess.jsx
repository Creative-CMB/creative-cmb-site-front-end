import React, { Component } from 'react'
import { Result, Button } from "antd";
import { Link } from 'react-router-dom';


class DashSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <Result
            status="success"
            title="Your request has been successfully submitted 😊👌"
            subTitle="An email has been sent to your email address with the reference number."
            extra={[
              <Button type="primary" key="console">
                <Link to="/dash">Go Console</Link>
              </Button>,
            ]}
          />
        );
    }
}
 
export default DashSuccess;