import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

require('./DashChartRouns');

class DashEx extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="dash-chart dash-ex">
                <h1 className="dash-top-3">OVERVIEW</h1>
                <h1 className="dash-top-4">MONTHLY EXPENSES</h1>
                <Bar height="250px" data={this.props.data} options={{
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                fontColor: 'black',
                                //display:false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                               beginAtZero: true,
                                fontColor: 'black'
                            },
                            gridLines: {
                                display: false,

                            }
                        }]
                    },
                    curvature: 1,
                    cornerRadius: 13,
                    responsive:true
                }} />
            </div>
         );
    }
}
 
export default DashEx;