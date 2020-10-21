import React from 'react';
import App from '../App';
//import "./Css/CardStyle.css";
import { Modal, Button } from 'antd';
import Exb from '../Images/Exb.jpg';
import { Link } from 'react-router-dom';









const Card = props=>{
    
   

    
    return(
        <div className="card1 text-center shadow">
            <div className="overflow">
           
                <img src={props.imgsrc} alt="Exhibition" className='card-img-top'/>
          
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.para}
                </p>
                <Link to={props.link}><button type="button" class="btn btn-outline-primary">View</button></Link>
            </div>
        </div>    
    );
}



export default Card;