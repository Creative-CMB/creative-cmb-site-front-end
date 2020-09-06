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







class shali extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
           <Link to="/create"><img style={{position:"absolute", top:"70px",right:"150px"}}src={edi}></img></Link>
           <Link to="/create"><img style={{position:"absolute", top:"70px",right:"50px"}}src={del}></img></Link>
           <Link to="/create"><img style={{position:"absolute", top:"220px",right:"150px"}}src={edi}></img></Link>
           <Link to="/create"><img style={{position:"absolute", top:"220px",right:"50px"}}src={del}></img></Link>
           <Link to="/create"><img style={{position:"absolute", top:"370px",right:"150px"}}src={edi}></img></Link>
           <Link to="/create"><img style={{position:"absolute", top:"370px",right:"50px"}}src={del}></img></Link>


            <a>
     <div className="wrapper4">
                <div className="row">
                     
                     <img src={platinum}></img>
                     
                <h2 style={{top:"10px",left:"20px",position:"relative"}}>Platinum Package</h2>
                
     
     </div>
     </div>
     </a>

     <div className="wrapper5">
                <div className="row">
                <img src={gold}></img>
                <h2 style={{top:"10px",left:"20px",position:"relative"}}>Gold Package</h2>
                
     </div>
     </div>
    

     <div className="wrapper6">
                <div className="row">
                <img src={silver}></img>
                <h2 style={{top:"10px",left:"20px",position:"relative"}}>Silver Package</h2>
               
                
     </div>
     </div>

     <img style={{position:"relative", left:"1000px", bottom:"40px"}}src={pack}></img>

     
     </div>
     
    


     

         
     </div>
         );
    }
}
 
export default shali;