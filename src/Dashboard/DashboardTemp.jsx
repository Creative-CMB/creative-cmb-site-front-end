import React, { Component } from 'react';
import rec from './images/Rectangle2.png'
import './css/dash.css';
import DashCard from './DashCard';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import up from './images/up.png';
import down from './images/down.png';
import side from './images/side.png';
import right from './images/right.png';
import DashSales from './DashSales';
import DashEx from './DashEx';
import DashOrders from './DashOrders';

class DashboardTemp extends Component {
    constructor(props) {
        super(props);
      this.state = { 
        data: {},
        dataForDashEx:{},
         }
  }
  
  componentWillMount() {
    this.getChartData();
    this.getChartDataForDashEx();
  }

  getChartData() {
    this.setState({
      data: {
        labels: [1,2,3,4,5,6,7,8],
        datasets: [
          {
            label: "complete",
            data: [60, 40,20,50,40,56,80,100],
            backgroundColor: ["#0f4c75", "#3282b8"],
            borderColor: '#eeeeee',
            fill: false,
            borderWidth: 4,
            aspectRatio:5
          },
        ],
      },
    });
  }

  getChartDataForDashEx() {
    this.setState({
      dataForDashEx: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [
          {
            label: "complete",
            data: [60, 40, 20, 50, 40, 56, 80, 100],
            backgroundColor: ["#1F78B4", "#1F78B4", "#1F78B4", "#1F78B4", "#1F78B4", "#1F78B4", "#1F78B4", "#1F78B4"],
            borderColor: '#eeeeee',
            fill: false,
            borderWidth: 0,
            aspectRatio: 5,
            curvature: 2,
            hitRadius: 3, cornerRadius: 20,
            responsive:true
          },
        ],
      },
    });
  }

    render() { 
        return (
          <div className="dash-main row">
            <div className="col-lg-2 dash-side"></div>
            <div className="col-lg-10 dash-mid">
              <div className="row dash-mid-row">
                <div className="col-lg-3"><DashCard title="TOTAL USERS" img={img1} count="140" indi={up} stat="20%"/></div>
                <div className="col-lg-3"><DashCard title="TOTAL EVENTS TO HANDLE" img={img2} count="140" indi={down} stat="67%"/></div>
                <div className="col-lg-3"><DashCard title="MONTHLY EXPENSES" img={img3} count="Rs.140" indi={right} stat="40%"/></div>
                <div className="col-lg-3"><DashCard title="EVENTS IN THIS MONTH" img={img4} count="140" indi={side} stat="90%"/></div>
              </div>
              <div className="row dash-sales-row">
                <div className="col-lg-8 dash-sales">
                  <DashSales data={this.state.data}/>
                </div>
                <div className="col-lg-4"><DashEx data={this.state.dataForDashEx}/></div>
              </div>
              <div className="row dash-sales-row">
                <div className="col-lg-8 dash-orders-main">
                  <DashOrders />
                </div>
                <div className="col-lg-4">
                
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default DashboardTemp;