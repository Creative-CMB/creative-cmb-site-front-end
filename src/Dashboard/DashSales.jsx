import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class DashSales extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="dash-chart">
                <h1 className="dash-top-1">OVERVIEW</h1>
                <h1 className="dash-top-2">SALES VALUE</h1>
                <Line height="100px" data={this.props.data} options={{
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                fontColor: 'white'
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                //beginAtZero: true,
                                fontColor: 'white'
                            },
                            gridLines: {
                                display: false,
                               
                            }
                        }]
                    },
                    }} />
            </div>
         );
    }
}
 
export default DashSales;