import React, { Component } from 'react';
import Foodfest from '../Images/Foodfest1.png';
import {Link } from 'react-router-dom';
import "./Css/kajan.css";



class PosterHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
        
            <div className="row">
            <div className="col-md-2-sm-6 ml-5">
                    <div className="col-lg-12 d-flex mt-5 flex-column p-4">
                    <h2 style={{fontFamily:"Roboto", fontWeight:"bold"}} >SriLankan Food Festivel</h2>
                    
                    <div className="col-md-2-sm-3 ml-5">  
                    <img src={Foodfest}></img>
                    </div>
                    </div>
                    </div>
                    <div style={{top:"120px"}} className="col-sm-6 ">
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</h5>
                    
                    </div>
                    <Link to="/create" > <button className="button-createhome  ml-5">Create Event</button></Link>

                    </div>

        
                
                </>
         );
    }
}
 
export default PosterHome;