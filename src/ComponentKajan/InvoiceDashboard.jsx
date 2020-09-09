import React, { Component } from 'react';
import {Card,Col,Row, Table, Space, Button,Scroll} from 'antd';
import Money from "../Images/money.png";
import Success from "../Images/success.png";
import Unsuccess from "../Images/unsuccess.png";
import Edit from "../Images/edit2.png";
import Delete from "../Images/delete1.png";
import EventNav from "../ComponentsAkila/EventNav";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import KajanNav from "./KajanNav";









const columns = [
    

    {title: 'Order Name', dataIndex:'Ordername', key:'orderName'},
    {title: 'payment Date', dataIndex:'payment date', key:'payment date'},
    {title: 'Order Name', dataIndex:'Ordername', key:'orderName'},
    {title: 'PaymentType', dataIndex:'PaymentType', key:'type'},
    {title: 'Status', dataIndex:'Status', key:'Status'},

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
        Ordername:'Music concert',
        PaymentType:'Cash',
        Amount:'Rs.20000',


    },

    {
        key:2,
        Ordername:'Music concert',
        PaymentType:'Cash',
        Amount:'Rs.20000'

    },
    {
        key:3,
        Ordername:'Music concert',
        PaymentType:'Cash',
        Amount:'Rs.20000'

    },
];

class InvoiceDashboard extends Component {
    constructor() {
        super();
        this.state = { 
            invoice:[],
         }
}


componentDidMount(){
    this.fetchDetails()
  }

  fetchDetails = () =>{
    console.log('fetching...')

    fetch('http://127.0.0.1:8000/invoice-list/')
    .then(response => response.json())
    .then(data => 
      this.setState({
        invoice:data
      }) 
      )
  }

  delete = (id) => {
      var url = "http://127.0.0.1:8000/invoice-delete/" + id + "/"
;
fetch(url,{
    method:"DELETE",
    headers:{
        'Content-type':'application/jason',
    },
}).then((response) => {
    this.fetchDetails()
}).catch(err => console.log(err))
}



tableData() {
    var self = this 
    return this.state.invoice.map((item) => {
        return (

            
           <tr>
              <td>{item.invoice_id}</td>
              <td> {item.order_name} </td>
              <td> {item.amount} </td>
              <td> {item.inv_status} </td>
              <td> {item.date} </td>
              <Space size="large">
        <Link to="/invoadd"><button type = "button" class="btn btn-outline-primary" >Edit</button></Link>
        <button type="button" class="btn btn-outline-danger"  onClick={()=> this.delete(item.invoice_id)}>Delete</button>
    </Space>
           </tr>
        )
     })
}
    render() { 
        return ( 
            <div>
                <body>
                
                <div><KajanNav /></div>
                
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
     <div  className = "container" >
                <div >
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className= "table table-hover ">
                    <thead>
                        <tr>
                        <th>Invoice Id</th>
                        <th>Orders</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tableData()}
                    </tbody>
                </table>
                </div>
    
                <div >


                </div>


                </div>
            </div>
           
              <Link to="/invoadd" > <button className="button-add">Add Invoice</button></Link>
                <button className="button-print">Print Invoice</button>


     </div>
     </body>
     </div>

     

         );
    }
}
 
export default InvoiceDashboard;
