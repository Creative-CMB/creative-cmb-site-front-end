import React, { Component } from 'react';
import {Card,Col,Row,Radio, Table,Select, Space, Button,Scroll,Modal,Drawer,Form,Input, DatePicker} from 'antd';
import Money from "../Images/money.png";
import Success from "../Images/success.png";
import Unsuccess from "../Images/unsuccess.png";
import Edit from "../Images/edit2.png";
import Delete from "../Images/delete1.png";
import EventNav from "../ComponentsAkila/EventNav";
import axios from "axios";
import moment from "moment";
import jsPDF from "jspdf"
import "jspdf-autotable"

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import KajanNav from "./KajanNav";







const { Option } = Select;





class InvoiceDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            invoice:[],
            selectedIndex:"",
            selectedInvoice:{},
            value: 1,
            visible:false,
            ordername: "",
            paytype:"",
            inv_amount: "",
            status:"",
            invo_date: "",
            
            
         }
}


 componentWillMount(){
   this.fetchDetails();
 }

 componentDidMount(){
  document.title = "CreateCMB | Manage Invoice";
  }

  generatePDF = (invoicedata) => {
    //initilize the pds
    const doc = new jsPDF();

    //column definition
    const tableColumns = ["Invoice Id", "Order name", "Amount", "Status", "Payment Type", "Date"];
    const tableRows = [];

    const rowdata = [
    invoicedata.invoice_id,
    invoicedata.order_name,
    invoicedata.amount,
    invoicedata.inv_status,
    invoicedata.payment_type,
    invoicedata.date
    ];

    tableRows.push(rowdata);

    doc.autoTable(tableColumns, tableRows, { startY: 20 });
    const date = Date().split(" ");
    //the filename will be the current systems date
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    doc.text(invoicedata.order_name+ "'s " + "           - note that this is an auto generated file.", 14, 15);
    doc.save(`report_${dateStr}.pdf`);

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

showDrawer = (id) => {
    this.state.invoice
      .filter((item) => item.invoice_id === id)
      .map((filterdItem) => this.setState({ selectedInvoice: filterdItem }));

    this.setState(
      {
        visible: true,
      },
      () => console.log(this.state.selectedInvoice)
    );

    console.log(this.state.selectedInvoice);
  };

  onClose = () => {
    window.location.reload(false);
    this.setState(
      {
        visible: false,
      },
      () => console.log(this.state.visible)
    );
  };

  sendData = () => {
    
      const data = {
      invoice_id :this.state.selectedInvoice.invoice_id,
      order_name : this.state.ordername,
      amount : this.state.inv_amount,
      inv_status : this.state.status,
      payment_type : this.state.paytype,
      date : this.state.invo_date,
    };


    console.log("data" , data);

    var url = "http://127.0.0.1:8000/invoice-update/" + this.state.selectedInvoice.invoice_id + "/";
    console.log("data",url);

    fetch(url,{
      method:'POST',
      headers:{
        'Content-type' : 'application/json',
      },
      body:JSON.stringify(data),
    }).then(res => console.log(res.status)).catch(err => console.log(err));
  };

  updateData = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  selectData = (e) => {
    this.setState({ type: e[0] });
  };


  getdate = (e) => {
    this.setState({ date: e });
  };

  

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
        <button type = "button" class="btn btn-outline-primary" onClick={() => this.showDrawer(item.invoice_id)}>Edit</button>
       
        <button type="button" class="btn btn-outline-danger"  onClick={()=> this.delete(item.invoice_id)}>Delete</button>
        <button type="button" class="btn btn-outline-success"  onClick={()=> this.generatePDF(item)}>Print Invoice</button>

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
            <Drawer
            title = "Update invoice"
            width="400px"
            onClose = {this.onClose}
            visible={this.state.visible}
            bodyStyle={{paddingBottom:10}}
            footer={
                <div
                  style={{
                    textAlign: "right",
                  }}
                >
             <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                  Cancel
                </Button>
                <Button onClick={this.sendData} type="primary">
                  Update
                </Button>
              </div>
            }
          >
              <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="ordername"
                    label="Order Name"
                    rules={[
                      { required: true, message: "Please enter a Order name" },
                    ]}
                  >
                    <Input
                    onChange={this.updateData}
                      placeholder="Please enter Order name"
                      name="ordername"
                      defaultValue={this.state.selectedInvoice.order_name}
                      
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="inv_amount"
                    label="Price"
                    rules={[
                      { required: true, message: "Please enter Price" },
                    ]}
                  >
                    <Input
                      onChange={this.updateData}
                      placeholder="Please enter Price"
                      name="inv_amount"

                      defaultValue={this.state.selectedInvoice.amount}
                      
                    />
                  </Form.Item>
                </Col>
                    </Row>
                    <Row>
                    <Col span={12}>
                  <Form.Item
                    name="invo_date"
                    label="Date"
                    rules={[
                      { required: true, message: "Please enter Date" },
                    ]}
                  >
                    
                    <div class='form-group'>
                          <label>
                            Payment date
                          </label>
                          <div class='col-lg-9 col-md-9 col-sm-9'>
                          <input type="date"
                           onChange={(value) =>
                            this.getdate(value.format("YYYY-MM-DD"))
                          }
                          name="invo_date"
                           onChange={this.updateData}
                           defaultValue={moment(this.state.selectedInvoice.date)}/>
                          </div>
                        </div>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="paytype"
                    label="Payment type"
                    rules={[
                      { required: true, message: "Please enter Payment type" },
                    ]}
                  >
                    <Input
                      onChange={this.updateData}
                      placeholder="Please enter Payment type"
                      name="paytype"

                      defaultValue={this.state.selectedInvoice.payment_type}
                      
                    />
                  </Form.Item>
                </Col>
               
                    </Row>
                    <Row>
                      <Col span={12}>
                      <Form.Item
                    name="status"
                    label="Status"
                    rules={[
                      { required: true, message: "Please enter Status" },
                    ]}
                  >
                    <Input
                      onChange={this.updateData}
                      placeholder="Please enter Status"
                      name="status"
                      defaultValue={this.state.selectedInvoice.inv_status}
                      
                    />
                  </Form.Item>
                      
                      </Col>
                    </Row>
                    </Form>
          </Drawer>
                    

     </div>
     </body>
     </div>

     

         );
    }
}
 
export default InvoiceDashboard;
