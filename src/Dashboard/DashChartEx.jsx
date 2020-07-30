import React, { Component } from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
import { Typography } from "antd";
import Chart from "react-apexcharts";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

class DashChartEx extends Component {
  constructor(props) {
    super(props);
      this.state = {
        options: {},
          series: [],
          labels: [],
      };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    //fetch the data from the API
    //demo data

    this.setState({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        colors: ["#bbe1fa", "#3282b8", "#0f4c75", "#93b5e1", "#00bcd4", "#b2ebf2", "#01a9b4", '#1b6ca8',
          '#142850', '#162447'
        ],
      },
      series: [30, 40, 45, 50, 49, 60, 70, 91],
      labels:["a","b","c","d","e","f","g","h"]
    });
  };
  render() {
    return (
      <Card style={{ marginTop: 16, marginLeft: 10 }}>
        <p className="dash-top-1">OVERVIEW</p>
        <p className="dash-top-2">MONTHLY EXPENSES</p>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          //width="380"
          height="313"
        />
      </Card>
    );
  }
}

export default DashChartEx;
