import React, { Component } from 'react';
import "./Css/kajan.css";
import ticket from "../Images/Servicetkt.png";
import event from "../Images/Serviceevent.png";
import ad from "../Images/Servicead.png";
import rent from "../Images/Servicerent.png";
import {Divider} from "antd";
import { Link } from 'react-router-dom';







class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
            <div className="row">
                <div className="col-lg-12">
                <h3 style={{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"bold",position:"relative",left:"700px"}}>Services</h3>
                </div>
                </div>
                <div className="row">
                <div className="col-6">
                  <div className="services1">
                        <img style={{position:"absolute",left:"73px",top:"40px"}} src={ticket}></img>
                        <h3 style={{fontFamily:"Roboto",fontSize:"25px",fontWeight:"bold",position:"relative",top:"150px",textAlign:"center"}}>Tickets</h3>
                        <Link to="/template">  <button style={{position:"relative",top:"170px",left:"73px"}} type="button" className="btn btn-outline-primary">View Details</button></Link>


                    </div>
                    <div className="services2">
                    <img style={{position:"absolute",left:"73px",top:"40px"}} src={event}></img>
                    <h3 style={{fontFamily:"Roboto",fontSize:"25px",fontWeight:"bold",position:"relative",top:"150px",textAlign:"center"}}>Events</h3>
                    <Link to="/create"> <button style={{position:"relative",top:"170px",left:"73px"}} type="button" className="btn btn-outline-primary">View Details</button></Link>



                    </div>
                    <div className="services3">
                    <img style={{position:"absolute",left:"90px",top:"40px"}} src={ad}></img>
                    <h3 style={{fontFamily:"Roboto",fontSize:"25px",fontWeight:"bold",position:"relative",top:"150px",textAlign:"center"}}>Marketing</h3>
                    <Link to="/marketing">  <button style={{position:"relative",top:"170px",left:"73px"}} type="button" className="btn btn-outline-primary">View Details</button></Link>


                    </div>
                    <div className="services4">
                    <img style={{position:"absolute",left:"90px",top:"40px"}} src={rent}></img>
                    <h3 style={{fontFamily:"Roboto",fontSize:"25px",fontWeight:"bold",position:"relative",top:"150px",textAlign:"center"}}>Rental</h3>
                    <Link to="/rent">  <button style={{position:"relative",top:"170px",left:"73px"}} type="button" className="btn btn-outline-primary">View Details</button></Link>




                    </div>




                </div>
            </div>
            
               
            
            </>
          );
    }
}
 
export default Services;