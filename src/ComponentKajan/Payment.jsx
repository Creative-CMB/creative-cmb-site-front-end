import React, { Component } from 'react';
import KajanNav from "./KajanNav";
import PaymentCard from "./PaymentCard";
import pay from "../Images/paypic.png";
import {Radio, Input,Button} from "antd";





class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value:"",
         }

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
            
                
            <h4 style={{color:"#3AA1FF",paddingLeft:"120px"}}>Pay using</h4>
            <Radio.Group onChange={this.onChange} value={value}>
        <Radio style={radioStyle} value={1}>
            cash
        </Radio>
        <Radio   style={radioStyle} value={2}>
          Payhere
        </Radio>
        
      </Radio.Group>

      <Button style={{top:"50px"}} type='primary' block>
              Checkout
            </Button>

            
      </div>
                
                    
                



                
                <img className="paypic" src={pay}></img>
                
            </div>
         );
    }
}
 
export default Payment;