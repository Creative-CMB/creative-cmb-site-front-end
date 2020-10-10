import React, { Component } from 'react';
class PaymentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="payment-wrapper">

<div className="Total"><h4>Total Bill</h4></div>

                <table style={{widt:"100%"}}>
            <tr>
              <th></th>
              <th>Price</th> 
            </tr>
            <tr>
              <td>MusicMojo 2k20 tickets</td>
              <td>Rs.4500</td>
            </tr>
            <tr>
              <td>LED Light rental</td>
              <td>Rs.15000</td>
      </tr>
            <tr>
              <td>Food fest Ad</td>
              <td>Rs.10000</td>
            </tr>

            <tr>
              <td><h5>Total</h5></td>
              <td>Rs.29500</td>
            </tr>
          </table>
          
                
                
            </div>
         );
    }
}
 
export default PaymentCard;