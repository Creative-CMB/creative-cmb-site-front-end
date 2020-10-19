import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import agreement from './Images/agreement.png'
import {Fab} from '@material-ui/core'

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
        var total = this.props.selected_item.reduce((totalPrice, item) => totalPrice + item.price, 0);
        //console.log( 'cal total price' ,total)

        return total;
        //this.setState({total_price:total})
    }

  delete = (id) => {
      this.props.deleteRental(id)
  }

  getInputDetails = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }


  handleRentalSubmit = (event) => {
    event.preventDefault()

    var total = this.props.selected_item.reduce((totalPrice, item) => totalPrice + item.price, 0);
    //console.log( 'cal total price' ,total)

    const rentalDetails = {
          rent_id: "RID" + cryptoRandomString({ length:5 }),
          rental_date: this.state.rental_date,
          rental_period:this.state.rental_period,
          status:'TEst',
          price:total,
          qty:this.state.qty,
          customer_id:'himasha',
      }

      var result = window.confirm('Your Total Price is :' + total)
      if(result){
        var url = 'http://127.0.0.1:8000/add-rental-details/'
    
        fetch(url, {
            method:'POST',
            headers:{
            'Content-type': 'application/json',
            },
    
            body:JSON.stringify(rentalDetails)
        }
        );
      }else{
          alert('swbswsubwusuws')
      }

      console.log('rental details', rentalDetails)
  }

    render() {
        var price = this.calTotalPrice()
        var stupid = this.props.selected_item.reduce((totalPrice, item) => totalPrice + item.price, 0);
        return (

            
                
              
                    <div className="row">
                        <div className="col-md-6"><div class="card" style={{background:"#edf0f6"}} ><div class="card-body">
                            <table className= "table table-hover table-borderless" style={{width:"100%"}} >
                                <thead>
                                    <tr>
                                        <th>ITEM NAME</th>
                                        <th>PRICE</th>
                                        <th>QUANTITY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    this.props.selected_item.map((s_item => {
                                    const{rent_equipment_id, name, price, quantity, customer_id} = s_item
                                    return (<tr>
                                        {/* <td> {rent_equipment_id} </td> */}
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>
                                        {/* <td> {customer_id} </td> */}
                                        <td><button type="button" className="btn btn-danger btn-sm" 
                                            onClick = {() => this.delete(rent_equipment_id)} >Delete</button> 
                                        </td>
                                    </tr>)
                                }))
                                }
                                </tbody>
                            </table></div></div>
                        </div>
                        
                        <div className="col-md-6" >
                            <form onSubmit={this.handleRentalSubmit} style = {{width: "100%"}} >
                                Quantity <input type="text"name="qty"  onChange={this.getInputDetails} className="form-control" style={{background:"#e9ccb1"}} /><br></br>
                                Price <input type="text" name="price" onChange={this.getInputDetails} className="form-control" /><br></br>
                                Date<input type="date" name="rental_date" onChange={this.getInputDetails} className="form-control"/><br></br>
                                Period <input type="text" name="rental_period" onChange={this.getInputDetails} className="form-control"/><br></br>
                            

                           
                                
                                <button type="submit" className="btn btn-primary" >Rent Equipment</button>
                                
                            </form>
                            
                            <img  src={agreement} style={{height:"40%" , width:"40%", marginLeft:"30%", marginTop:"25px"}}/>



                                <div class="alert alert-success" role="alert" style={{marginTop:'20px'}}>
                                <h6 class="alert-heading">Well done!</h6>
                                <p style={{fontSize:'12px'}}>Aww yeah, you successfully read this important alert message. 
                                    This example text is going to run a bit longer so that you can see how 
                                    spacing within an alert works with this kind of content.</p>
                                </div>
                                
                            
                            
                            <Fab color="primary" aria-label="add">
  
</Fab>

                            <Link to='/rental_history' ><button type="button" style={{marginLeft:"20px"}} className="btn btn-dark" >History</button></Link> 
                        </div>
                 
            </div>
        )
    }
}
