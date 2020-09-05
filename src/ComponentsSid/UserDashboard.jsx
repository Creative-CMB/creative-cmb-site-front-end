import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import home_icon from '../Images/home_icon.png';
import drop from "../Images/drop.png";
import create from "../Images/Icon material-create-new-folder.png";
import edit from "../Images/Icon material-update.png";
import show from "../Images/Icon ionic-ios-stats.png";
import Tooltip from "@material-ui/core/Tooltip";
import dlt from "../Images/Icon feather-delete.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row">
                <div className="col-lg-1" style={{backgroundColor:"#03c6fc", height: 880}}>
                    <ul className="side-nav">
                        
                        
                    </ul>    
                </div>
                <div className="col-lg-10" style={{backgroundColor:"", height: 880}}>
                    dashboard contents
                    
                </div>
            </div>
         );
    }
}
 
export default UserDashboard;