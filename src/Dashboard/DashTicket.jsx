import React, { Component } from 'react'

class DashTicket extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tableData: [],
         }
    }
    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        //fetch data

        //demodata
        const demoData = [{name:"SLIIT freshers day",date:"2020-10-11",time:"12:34",type:"musical",price:"2500",avail:"100",tot:"250000"}];

        this.setState({
            tableData: demoData,
        });
    }



    render() { 

        const data = this.state.tableData;
        const loop = data.map((item) => {
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.type}</td>
                    <td>{item.price}</td>
                    <td>{item.avail}</td>
                    <td>Rs.{item.tot}</td>
                </tr>
            );
        });
        return ( 
            <div className="dash-ticket-main">
                <h1 className="dash-top-3">OVERVIEW</h1>
                <h1 className="dash-top-4">SALES VALUE</h1>

                <div className="dash-tiket-table">
                    <table>
                        <tr>
                            <td> <th>NAME</th></td>
                            <td> <th>DATE</th></td>
                            <td> <th>TIME</th></td>
                            <td> <th>TYPE</th></td>
                            <td> <th>PRICE</th></td>
                            <td> <th>AVAILABILITY</th></td>
                            <td> <th>TOT. TICKET VALUE</th></td>
                        </tr>
                        {loop}
                    </table>
               </div>
            </div>
         );
    }
}
 
export default DashTicket;