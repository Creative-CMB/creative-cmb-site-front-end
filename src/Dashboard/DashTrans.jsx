import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


class DashTrans extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:{},
         }
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        //fetch data

        this.setState({
            data: {
                labels: ["Finished", "Have to finish"],
                datasets: [
                    {
                        label: "complete",
                        data: [60,40,60,10,40],
                        backgroundColor: ["#0f4c75", "#3282b8"],
                        borderColor: 'blue',
                        fill: false,
                        borderWidth: 3,
                        aspectRatio: 5,
                        //lineTension:6
                    },
                ],
            },
        });
    }
    render() { 
        return ( 
            <div className="dash-trans">
                <h1 className="dash-top-3">OVERVIEW</h1>
                <h1 className="dash-top-4">SALES VALUE</h1>
                <Line data={this.state.data} options={{
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
                    lineTension:0
                }} />
            </div>
         );
    }
}
 
export default DashTrans;