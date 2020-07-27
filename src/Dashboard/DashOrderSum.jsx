import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class DashOrderSum
 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{}
        }
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        this.setState({
            data: {
            labels: ["Finished","Have to finish"],
            datasets: [
                {
                    label: "complete",
                    data: [60, 40],
                    backgroundColor: ["#0f4c75", "#3282b8"],
                    borderColor: '#eeeeee',
                    fill: false,
                    borderWidth: 0,
                    aspectRatio: 5
                },
            ],
        },
        });
    }

    render() { 
        return ( 
            <div className="dash-order-sum-main">
                <h1 className="dash-top-3">OVERVIEW</h1>
                <h1 className="dash-top-4">SALES VALUE</h1>
                <Pie height="250px" data={this.state.data}/>
            </div>
         );
    }
}
 
export default DashOrderSum
;