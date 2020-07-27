import React, { Component } from 'react'

class DashOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="">
                <h1 className="dash-top-3">OVERVIEW</h1>
                <h1 className="dash-top-4">RECENT ORDERS</h1>
            </div>
         );
    }
}
 
export default DashOrders;