import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Alert } from 'antd';
const chartColor = '#FFFFFF';

const options = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    tooltips: {
        bodySpacing: 4,
        mode:"nearest",
        intersect: 0,
        position:"nearest",
        xPadding:10,
        yPadding:10,
        caretPadding:10
    },
    responsive: 1,
    scales: {
        yAxes: [{
            display:0,
            ticks: {
                display: false
            },
            gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
            }
        }],
        xAxes: [{
            display:0,
            ticks: {
                display: false
            },
            gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
            }
        }]
    },
    layout:{
        padding:{left:0,right:0,top:15,bottom:15}
    }
};


class FetchEventChart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            monthCount:[]
         }
    }

     componentDidMount() {
        this.fetchdata();
    }

    fetchdata = () => {
        fetch("http://127.0.0.1:8000/event-month-count/").then(data => data.json()).then(res => this.setState({ monthCount: res })).catch(err => console.log(err));
    }

    data = (canvas) => {
        let datas = [];
        let months = []
    this.state.monthCount.map(item =>{return(datas.push(item.count),months.push(item.created_month))})
    var ctx = canvas.getContext("2d");

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#0278ae');
    gradientStroke.addColorStop(1, chartColor);

    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "#FFFF");
    gradientFill.addColorStop(1, "#0278ae");
    return {
        labels: months,
        datasets: [{
            label: "Active Users",
            borderColor: "#0278ae",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#0278ae",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: datas
        }]
    }
};
    render() { 
        return ( 
            <div>
                <Line data={this.data} options={options} />
             </div>
         );
    }
}
 
export default FetchEventChart;