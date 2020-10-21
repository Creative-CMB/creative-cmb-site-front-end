import React, { Component } from 'react';
import KajanNav from "./KajanNav";
import PaymentCard from "./PaymentCard";
import Payhre from "./Payhere";
import pay from "../Images/paypic.png";
import debit from "../Images/debit.png";
import {Radio, Input,Button} from "antd";
import "./Css/kajan.css";






class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value:"",
            invoice:[],

         }

    }

    componentDidMount(){
      this.fetchDetails();
    }

    fetchDetails = () =>{
      console.log('fetching...')
  
      fetch('http://127.0.0.1:8000/invoices/INV81ace27/')
      .then(response => response.json())
      .then(data => 
        this.setState({
          invoice:data
          
        }) 
        )
        
    }

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };


    render() { 

        const radioStyle = {
            display: 'block',
            height: '50px',
            lineHeight: '70px',
          };
        const { value } = this.state;

        return ( 
            <div>
                < KajanNav/>
                <div>
                < PaymentCard/>
                </div>

                
            <div className="paytype">
            
               <img style={{width:"70%",height:"70%",margin:"0px 40px"}} src={debit}></img> 
              <Payhre/>
          

            
      </div>
                
                    
                



                
                <img className="paypic" src={pay}></img>
                
            </div>
         );
    }
}
 
export default Payment;