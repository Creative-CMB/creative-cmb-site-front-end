import React, { Component } from 'react';
import Chart from "react-apexcharts";
import { Skeleton, Switch, Card, Avatar } from "antd";

const { Meta } = Card;

class DashSalesChart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            options: {},
            series:[],
         }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        //fetch the data from the API
        //demo data

        this.setState({
            options:{ chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            },
        
            },
            series:[
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
          ],
          fill: {
            colors: ['#1A73E8', '#B32824']
          },
          colors: ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794',
            '#46AF78', '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'
          ],
        });
    }
    render() { 
        return (
          <Card
            className="dash-card"
            style={{ width: "auto", marginTop: 16}}
          >
            <p className="dash-top-1">OVERVIEW</p>
            <p className="dash-top-2">SALES VALUES</p>

            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              //width="500"
              height="300"
            />
          </Card>
        );
    }
}
 
export default DashSalesChart;