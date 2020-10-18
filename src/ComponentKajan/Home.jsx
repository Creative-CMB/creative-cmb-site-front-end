import React, { Component } from 'react';
import KajanNav from "../ComponentKajan/KajanNav";
import Poster from "../ComponentKajan/PosterHome";
import event from "../Images/eventhome1.png";
import {Nav} from "react-bootstrap";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {Divider} from "antd";
import "./Css/kajan.css";



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (

            <div>
                < KajanNav/>
                
                    <div className="float-right mt-3" >
                <img src={event}></img>
                </div>
                <div className="row">
                    <div className="col-lg-6 mt-5 d-flex flex-column p-4">
                        <h2 style={{fontFamily:"Roboto", fontWeight:"bold"}} >Welcome to CreativeCMB!!!</h2>
                        <div className="col-lg-12 offset ml-3 mt-5">
                        <h5 style={{fontFamily:"Roboto", color:"rgba(4, 4, 4, 0.63)"}} >We are "ONE STOP SHOP" for your event.
Young Dynamic & Professional Team with Creative & new Innovative Ideas to unique your event from others....
Let us Know Your Requirement....
We can make it fit for your Budget... Less

</h5>
<Link to="/create" > <button className="button-createhome  ml-5">Create Event</button></Link>
</div>
                    </div>
                    
                    

                </div>
                <div>
                    <Divider/>
                    <Poster />
                </div>
                
                </div>
            
          );
    }
}
 
export default Home;