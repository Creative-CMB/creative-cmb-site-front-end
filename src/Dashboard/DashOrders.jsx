import React, { Component } from 'react'
import { data } from 'jquery';

class DashOrders extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataArr: [{ name: "Akila Liyanage", date: "2020-10-10", time: "21.23", type: "party", venue: "saman,pambahinna,belihuloya", urgent: "yes" }, { name: "Akila Liyanage", date: "2020-10-10", time: "21.23", type: "party", venue: "saman,pambahinna,belihuloya", urgent: "yes" }], //sample data
         }
    }

    componentDidMount() {
        this.fetchDataArrfetchDataArr();
    }

    fetchDataArr() {
        //fetch the data from the API
    }

    render() { 

        const dataArr = this.state.dataArr;
        const loop = dataArr.map((item) => {

            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.type}</td>
                    <td>{item.venue}</td>
                    <td><span className={this.changeClass}>{item.urgent}</span></td>
                </tr>
            );
        });
        return ( 
            <div className=" dash-orders-compo">
                <h1 className="dash-top-3">OVERVIEW</h1>
                <h1 className="dash-top-4">RECENT ORDERS</h1>
                <table>
                    <tr className="dash-table-head">
                        <td><th>USER</th></td>
                        <td><th>DATE</th></td>
                        <td><th>TIME</th></td>
                        <td><th>TYPE</th></td>
                        <td><th>VENUE</th></td>
                        <td><th>URGRNT?</th></td>
                    </tr>
                    {loop}
                </table>
            </div>
         );
    }
}
 
export default DashOrders;