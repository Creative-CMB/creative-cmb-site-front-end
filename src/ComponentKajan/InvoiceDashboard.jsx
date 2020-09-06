import React, { Component } from 'react';
import {Card,Col,Row, Table, Space} from 'antd';
import Money from "../Images/money.png";
import Success from "../Images/success.png";
import Unsuccess from "../Images/unsuccess.png";
import Edit from "../Images/edit2.png";
import Delete from "../Images/delete1.png";
import EventNav from "../ComponentsAkila/EventNav";








const columns = [
    {title: 'Customer Name', dataIndex:'Customername', key:'custName'},
    {title: 'Order Name', dataIndex:'Ordername', key:'orderName'},
    {title: 'PaymentType', dataIndex:'PaymentType', key:'type'},
    {title: 'Amount', dataIndex:'Amount', key:'amount'},
    {title:'Action',
    dataIndex:'',
    key:'x',
render:() => (
    <Space size="middle">
        <a><img src={Edit}></img></a>
        <a><img src={Delete}></img></a>
    </Space>
),
    
                
},
];

const data = [
    {
        key:1,
        Customername:'Kaju',
        Ordername:'Music concert',
        PaymentType:'Cash',
        Amount:'Rs.20000'

    },

    {
        key:2,
        Customername:'Kaju',
        Ordername:'Music concert',
        PaymentType:'Cash',
        Amount:'Rs.20000'

    },
    {
        key:3,
        Customername:'Kaju',
        Ordername:'Music concert',
        PaymentType:'Cash',
        Amount:'Rs.20000'

    },
];

class InvoiceDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <body>
                
                <div><EventNav /></div>
            <div className="site-card-wrapper1">
                <div className="row">
                <div className="col-sm-4">
<div className="moneyimg">
    <img src={Money}></img>
</div>
</div>
                    <div className="col-sm-5">
                <h3>Total Income</h3>
                <count>Rs.120000</count>
     </div>
     </div>
     </div>

<div className="site-card-wrapper2">
<div className="row">
    <div className="col-sm-4">
<div className="moneyimg">
    <img src={Success}></img>
</div>

    </div>

    <div className="col-sm-5">
<h2>Success</h2>
<count>{300}</count>
</div>
</div>
</div>

<div className="site-card-wrapper3">
                <div className="row">
                <div className="col-sm-4">
<div className="moneyimg">
    <img src={Unsuccess}></img>
</div>

    </div>
                    <div className="col-sm-5">
                <h2>UnSuccess</h2>
                <count>{150}</count>
     </div>
     </div>
     </div>
     <div className="table-wrapper">
     <Table 
            columns={columns}
            dataSource={data}>
                </Table>
                <button className="button-add">Add Invoice</button>
                <button className="button-print">Print Invoice</button>


     </div>
     </body>
     </div>

     

         );
    }
}
 
export default InvoiceDashboard;
