import React, { Component } from 'react';
import { Progress,Card,Col } from 'antd';

class DashProgressChart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <Col lg={24} sm={0} xs={0}>
            <Card>
              <p className="dash-top-1" style={{ marginBottom: "15px" }}>
                Form Progression
              </p>
              <Progress style={{marginLeft:"10px"}} strokeWidth="10" type="circle" percent={this.props.percent} />
            </Card>
          </Col>
        );
    }
}
 
export default DashProgressChart;