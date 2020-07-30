import React, { Component, useState } from 'react';
import {Card,Row,Col,Form,Input,Affix} from 'antd';

class EventSec1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                eventname: "",
                creatorname: "",
                creatorphone: "",
                type: "",
                location: "",
                description: "",
                date: "",
                time: "",
            },
            progress:12.5,
        };
    }

    handleInput = (e) => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
        //const [stateval] = this.state.data;
       
        //this.props.progress(this.state.progress);
    }

    checkInput = () => {
        Object.keys(this.state.data).map((i) => {
          if (i != "") {
            this.setState({ progress: this.state.progress + 12.5 });
          } else {
            this.setState({ progress: this.state.progress + 0 });
          }
        });
        console.log(this.state.progress);
        this.props.progress(this.state.progress);
         
    }
    render() { 
        const value = this.checkInput;
        return (
          <Card>
            <p className="dash-top-1" style={{ marginBottom: "10px" }}>
              Basic Details
            </p>
            <form action="">
              <Row>
                <Col
                  lg={12}
                  md={12}
                  sm={24}
                  xs={24}
                  style={{ padding: "10px" }}
                >
                  <Form.Item label="Success" hasFeedback validateStatus={value}>
                    <Input
                      name="creatorname"
                      onChange={this.handleInput.bind(this)}
                      onBlur={this.checkInput}
                      placeholder="I'm the content"
                      id="a"
                    />
                  </Form.Item>
                  <Form.Item label="Success">
                    <Input
                      name="creatorname"
                      onChange={this.handleInput.bind(this)}
                      placeholder="I'm the content"
                      id="a"
                      onBlur={this.checkInput}
                    />
                  </Form.Item>
                  <Form.Item label="Success">
                    <Input
                      name="creatorphone"
                      onChange={this.handleInput.bind(this)}
                      placeholder="I'm the content"
                      id="success"
                      onBlur={this.checkInput}
                    />
                  </Form.Item>
                  <Form.Item label="Success">
                    <Input
                      name="eventname"
                      onChange={this.handleInput.bind(this)}
                      onBlur={this.checkInput}
                    />
                  </Form.Item>
                </Col>
                <Col
                  lg={12}
                  md={12}
                  sm={24}
                  xs={24}
                  style={{ padding: "10px" }}
                >
                  <Form.Item label="Success">
                    <Input
                      name="eventname"
                      onChange={this.handleInput.bind(this)}
                      placeholder="I'm the content"
                      id="success"
                      onBlur={this.checkInput}
                    />
                  </Form.Item>
                  <Form.Item label="Success">
                    <Input
                      name="eventname"
                      onChange={this.handleInput.bind(this)}
                      placeholder="I'm the content"
                      id="success"
                      onBlur={this.checkInput}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Success"
                    hasFeedback
                    validateStatus={this.state.class}
                  >
                    <Input
                      name="eventname"
                      onChange={this.handleInput.bind(this)}
                      placeholder="I'm the content"
                      id="success"
                      onBlur={this.checkInput}
                    />
                  </Form.Item>
                  <Form.Item label="Success">
                    <Input
                      name="eventname"
                      onChange={this.handleInput.bind(this)}
                      placeholder="I'm the content"
                      id="success"
                      onBlur={this.checkInput}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </form>
          </Card>
        );
    }
}
 
export default EventSec1;