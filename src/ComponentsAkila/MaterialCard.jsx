import React, { Component } from 'react';
import { Statistic, Row, Col, Button,Card } from 'antd';

class Materialcard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cuscout: "",
            totEvents:"",
         }
    }

    componentDidMount() {
        this.fetchdata();
   }

    fetchdata = () => {
        fetch("http://127.0.0.1:8000/event-user-count/").then(data => data.json()).then(res => this.setState({ cuscout: res })).catch(err => console.log(err));
        fetch("http://127.0.0.1:8000/event-count/").then(data => data.json()).then(resp => this.setState({ totEvents: resp })).catch(err => console.log(err));
    }
    render() { 
        return ( 
            <div className="site-card-border-less-wrapper">
                <Card title="Users Vs Events Count" bordered={false}>
                    <Row gutter={16}>
                    <Col span={12}>
                    <Statistic title="Users linked to active events" value={this.state.cuscout} />
                    </Col>
                    <Col span={12}>
                    <Statistic title="Total Events" value={this.state.totEvents} />
                    <Button style={{ marginTop: 16 }} type="primary">
                        Download Data
                    </Button>
                    </Col>
                </Row>
                 </Card>
            </div>
         );
    }
}
 
export default Materialcard;