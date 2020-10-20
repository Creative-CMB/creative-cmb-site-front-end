
import React, { Component } from 'react'
import {Popover, OverlayTrigger} from 'react-bootstrap'
import 'antd/dist/antd.css';
import {Button, Alert } from 'antd';

export default class RentalHistory extends Component {
  
    constructor(props) {
        
        super(props);
        this.state = {
            rental_history:[],
            value:0,
            showA:true,
           
            
        };
      
    }
 
    toggle = () => {
        this.setState({show: !this.state.showA})
    }

    buttonClicked(event) {
    this.setState({value: this.state.value+1});
  }
     componentDidMount() {
        this.fecthRentalHistory()
    }
    
    fecthRentalHistory() {
        fetch('http://127.0.0.1:8000/rentalDetailsById/himasha/')
        .then(response => response.json())
        .then(data =>
            this.setState({
                rental_history:data}))            
    }

    
      
   

    render() {

       

        const popover = (
            <Popover id="popover-basic">
              <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
              </Popover.Content>
            </Popover>
          );
          
      const alert = (
        <Alert
        message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warning"
        closable
        onClose={this.onClose}></Alert>
      
      )
        return (

            
            <div>
                <OverlayTrigger trigger="click" placement="right" overlay={popover} trigger="focus">
              <Button variant="success">Click me to see</Button>
            </OverlayTrigger>

    
            <Alert color="primary" toggle={this.toggle} isOpen={this.state.showA}>hiiiiiiiiiiiiii</Alert>

        <Button onClick={this.toggle}>
          Toggle Toast <strong>with</strong> Animation
        </Button>

        
      <button onClick={alert} >3defrgg</button> 

                <h1> {this.state.currentDate} </h1>
                <table table className= "table table-hover" >
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.rental_history.map((r_history) => {
                        const {rental_date, rental_period, status, price, qty} = r_history
                        return (
                        <tr  >
                            <td> {rental_date} </td>
                            <td> {rental_period} </td>
                            <td> {status} </td>
                            <td> {price} </td>
                            <td> {qty} </td>
                            <td>  </td>
                        </tr>
                        )})}
                    </tbody>
                </table>
                {this.state.value} <button type="button" onClick={this.buttonClicked.bind(this)}>help dude</button>

                    
            </div>
        )
    }
}
