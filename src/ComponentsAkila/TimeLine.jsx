import React, { Component } from 'react';
import { useState } from 'react';
import { Timeline, Radio } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actions: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        fetch("http://127.0.0.1:8000/actions/").then(res => res.json()).then(data => this.setState({ actions: data })).catch(err => console.log
        (err))
    }
    
    render() { 
        return ( 
            <div>
        <Timeline mode="left" className="mt-4">
                    {this.state.actions.map(item => {
                        return (<Timeline.Item label={item.created_date}> {item.user_id} Created an Event. <br /> Event ID : <Link to="/edit">{item.event_id}</Link></Timeline.Item>)
            })}
        </Timeline>
            </div>
         );
    }
}
 
export default TimeLine;