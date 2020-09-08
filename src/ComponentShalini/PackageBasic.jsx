import React, { Component } from 'react';
import {
Link
  } from "react-router-dom";
import edi from "../Images/edi.png";
import del from "../Images/del.png";
import gold from "../Images/gold.png";
import silver from "../Images/silver.png";
import platinum from "../Images/platinum.png";
import pack from "../Images/pack.png";
import cusicon from "../Images/AdCustomer.png";
import background from "../Images/background.jpg";
import {Space} from 'antd';
import Table from 'react-bootstrap/Table'








class shali extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = () =>{
        var url = "http://127.0.0.1:8000/package-list/";
        fetch(url).then(res => res.json).then(data => this.setState({data}))
    }
    render() { 
        return ( 
            
            <div className="pbody" style={{backgroundImage:"url('../Images/background.jpg')"}}>
                

            <div className="wrapper1">
                <div className="row">
                <div className="col-sm-4">
                <img style={{position:"relative", left:"-25px",top:"10px"}} src={cusicon}></img>

</div>
                    <div className="col-sm-2">
                <h2>Platinum Customers</h2>
                <div className="adcount">30</div>
     </div>
     </div>
     </div>

<div className="wrapper2">
<div className="row">
    <div className="col-sm-4">

<img style={{position:"relative", left:"-25px",top:"10px"}} src={cusicon}></img>
    </div>

    <div className="col-sm-2">
<h2>Gold Customers</h2>
<div className="adcount">50</div>
</div>
</div>
</div>

<div className="wrapper3">
                <div className="row">

                <div className="col-sm-4">

                <img style={{position:"relative", left:"-25px",top:"10px"}} src={cusicon}></img>
            </div>
                    <div className="col-sm-2">
                <h2>Silver Customers</h2>
                <div className="adcount">55</div>
     
     </div>
     </div>
     
     </div>

            <div className="shali-table-wrapper">
            <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      {Array.from({ length: 12 }).map((_, index) => (
        <th key={index}>Table heading</th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>2</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  </tbody>
</Table>

     
     </div>
     
    


     

         
     </div>
         );
    }
}
 
export default shali;