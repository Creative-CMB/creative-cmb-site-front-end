import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import agreement from './Images/agreement.png'
import {Popover, OverlayTrigger} from 'react-bootstrap'

import 'antd/dist/antd.css';

import {Button, Popconfirm, message} from 'antd';

const cryptoRandomString  = require("crypto-random-string");

export default class EquipmentRental extends Component {

    state = {
        price:'',
        rental_date:'',
        rental_period:'',
        status:'',
        qty:'',
        total_price:''
    }
  
    calTotalPrice = () => {
        const total = this.props.selected_item.reduce((totalPrice, pilot) => totalPrice + pilot.price, 0);
        console.log(total)

        this.setState({total_price:total})
    }

    delete = (id) => {
        this.props.deleteRental(id)
    }

    getInputDetails = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    validateInputFields = (e) => {
        e.preventDefault()
        const {rental_date, rental_period} = this.state

        if(!rental_period || isNaN(rental_period)){
            message.error( 'Please Enter Rental Period',1);

        }else{

            this.handleRentalSubmit(e)

        }
    }

    handleRentalSubmit = (event) => {
        //event.preventDefault()

        const {rental_date, rental_period} = this.state

        const rentalDetails = {
          rent_id: "RID" + cryptoRandomString({ length:5 }),
          rental_date: this.state.rental_date,
          rental_period:this.state.rental_period,
          status:'TEst',
          price:this.state.price,
          qty:this.state.qty,
          customer_id:'himasha',
      }

      var url = 'http://127.0.0.1:8000/add-rental-details/'
    
      fetch(url, {
        method:'POST',
        headers:{
          'Content-type': 'application/json',
        },
  
        body:JSON.stringify(rentalDetails)
      }
      );
      console.log('rental details', rentalDetails)

      this.handleReset()
  }

  handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    this.setState({
        rental_date:[{}],
        rental_period:[{}],
    });
};

   confirm(id, e) {
    console.log(e);
    this.delete(id)
    message.success('Click on Delete');
  }
  
    cancel(e) {
    console.log(e);
    message.error('Click on Cancel');
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
        return (
            <div  style={{marginTop:"200px"}} >{()=>this.calTotalPrice()}
                
                    <div className="row mt-5">
                        <div className="col-md-6"><div className="card" style={{marginLeft:"10%"}}><div className="card-body">
                            <table className= "table table-hover table-borderless" style={{width:"100%"}} >
                                <thead>
                                    <tr>
                                        <th>ITEM NAME</th>
                                        <th>PRICE</th>
                                        <th>QUANTITY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.selected_item.map((s_item => {
                                    const{rent_equipment_id, name, price, quantity, customer_id} = s_item
                                    return (<tr>
                                        {/* <td> {rent_equipment_id} </td> */}
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>
                                        {/* <td> {customer_id} </td> */}
                                        <td><Popconfirm
                                                title="Are you sure delete this task?"
                                                onConfirm={() => this.confirm(rent_equipment_id)}
                                                onCancel={this.cancel}
                                                okText="Delete"
                                                cancelText="Cancel">
                                                 <button type="primary" className="btn btn-danger btn-sm">Delete</button> </Popconfirm>
                                            
                                           
                                        </td>
                                    </tr>)
                                }))
                                }
                                </tbody>
                            </table></div></div>
                        </div>
                        
                        <div className="col-md-6" >
                        <div class="card" style={{width:"92%"}}><div class="card-body">
                            <form onSubmit={this.validateInputFields} style = {{width: "100%"}} >

                            <div className="form-row">
                                <div className="col">
                                Date<input type="date" name="rental_date" onChange={this.getInputDetails} className="form-control"/><br></br>
                                </div>
                                <div className="col">
                                Period <input type="text" name="rental_period" onChange={this.getInputDetails} className="form-control"/>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col">
                                Quantity <input type="text"name="qty"  onChange={this.getInputDetails} className="form-control"/>
                                </div>
                                <div className="col">
                                Price <input type="text" name="price" onChange={this.getInputDetails} className="form-control" />
                                </div>
                            </div>

                            <div className="form-row" style={{marginTop:"15px", marginLeft:"32%"}}>
                                <div className="col">
                            
                                    <button type="submit" className="btn btn-primary">Rent Equipment</button>
                                
                                
                                
                                <Link to='/rental_history' ><button type="button" style={{marginLeft:"20px"}} className="btn btn-dark" >History</button></Link> 
                                </div>
                            </div>

                            </form>
                                <div class="alert alert-success" role="alert" style={{marginTop:'20px'}}>
                                <h6 class="alert-heading">Well done!</h6>
                                <p style={{fontSize:'12px'}}>Aww yeah, you successfully read this important alert message. 
                                    This example text is going to run a bit longer so that you can see how 
                                    spacing within an alert works with this kind of content.</p>
                                </div>

                            </div></div>
                            



                        </div>
                        {/* <img   style={{height:"30%" , width:"30%"}}/> */}

                    </div>
               
            </div>
        )
    }
}
