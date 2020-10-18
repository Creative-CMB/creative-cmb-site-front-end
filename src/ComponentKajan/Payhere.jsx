import React, { Component } from 'react'
 
import { PayHereButton } from 'react-payhere-button';
import "./Css/kajan.css";

 
class Payhere extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          invoice:[],
          selectedIndex:"",
          selectedInvoice:{},
          value: 1,
          visible:false,
          ordername: "",
          paytype:"",
          inv_amount: "",
          status:"",
          invo_date: "",
         }
    }


    
    componentDidMount(){
        this.fetchDetails();
      }
  
      fetchDetails = () =>{
        console.log('fetching...')
    
        fetch('http://127.0.0.1:8000/invoices/INV324b875/')
        .then(response => response.json())
        .then(data => 
          this.setState({
            invoice:data
            
          }) 
          )
          
      }
  render() {
    const onSucess = (orderId) => console.log('onSuccess', orderId);
    const onDismissed = () => console.log('onDismissed');
    const onError = (error) => console.log('onError', error);
 
    return this.state.invoice.map((item) => {
      
    return <PayHereButton
    sandbox={true}
    merchant_id={'1215319'}
    onCompleted={onSucess}
    onDismissed={onDismissed}
    onError={onError}
    order_id={'tkt12345'}
    items={item.order_name}
    amount={item.amount}
    currency={'LKR'}
    first_name={'Kajathees'}
    last_name={'Prem'}
    email={'kajathees@gmail.com'}
    phone={'0771234567'}
      options={{
        
        return_url: 'http://localhost:3000/Payment',
        cancel_url: 'http://sample.com/cancel',
        notify_url: 'http://localhost:3000/inventory',
      }}
    />
    })
  }
}

export default Payhere