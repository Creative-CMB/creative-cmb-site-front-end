import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class EventCreateChart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:props.data
        }
        
        console.log(this.props.data);
    }
    render() { 
        return (
          <div className="chart">
            <p>Event Creation Percentage</p>
            <Doughnut data={this.props.data} options={{}} />
          </div>
        );
    }
}
 
export default EventCreateChart;