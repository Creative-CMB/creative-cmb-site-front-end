import React, { Component } from 'react';
import { useState } from 'react';
import { Timeline, Radio } from 'antd';

class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
        <Timeline mode="left" className="mt-4">
            <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
            <Timeline.Item>Technical testing</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
        </Timeline>
            </div>
         );
    }
}
 
export default TimeLine;