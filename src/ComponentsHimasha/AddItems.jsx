import React, { Component } from 'react';

//import  "./StylesHimasha/AddItems.css";
//import image from "./images/agreement.png"
import { Button } from 'react-bootstrap';
import axios from "axios"

const cryptoRandomString  = require("crypto-random-string");

export default class AddItems extends Component {

        constructor(props) {
            super(props);
            this.state = {
                eq_id: "EQP" + cryptoRandomString({length:7}),
                name:'',
                price:'',
                qty:'',
                admins:[],
                admin_id:'',
                image:'koinhb',
                model:'',
                condition:false,
                availability:false,
                supplier: "hello",
                rented_date: 2020-10-11,
                rental_period:8
             }
            this.handleSubmit = this.handleSubmit.bind(this)
        }

        formData = (event) => {
            this.setState({[event.target.name]: event.target.value})
            this.setState({condition: !this.state.condition})
            this.setState({availability: !this.state.availability})

            console.log(this.state.name, this.state.model)
            console.log(this.state.condition)
            console.log(this.state.availability)

            this.setState({
                  ...this.state,
                  [event.target.name] : event.target.value
            })


              if(event.target.name=== "qty") {
                  if(!Number(event.target.value)){
                      alert("Must be a number")
                  }
              }
        }

        checkAvailablity = () => {
            this.setState({availability: 'available'})
        }

        componentDidMount(){
            this.fetchAdmins();
        }

        fetchAdmins = () => {
            axios.get("http://127.0.0.1:8000/admin-list/").then((res) => {
                const admins = res.data;
                this.setState({ admins });
              });
        }

        

        handleSubmit = (event) => {
            event.preventDefault()
            const i = {
                item_id:this.state.eq_id,
                image: 'ggg',
                model: this.state.model,
                condition: this.state.condition,
                availability: this.state.availability,
            }


            console.log(this.state.eq_id)

            console.log(i)
            console.log(this.state)
        
        
            var url = 'http://127.0.0.1:8000/equipment-create/'
            
              fetch(url, {
                method:'POST',
                headers:{
                  'Content-type': 'application/json',
                },
          
                body:JSON.stringify(this.state)
              }
              );

              var url2 = 'http://127.0.0.1:8000/createInventory/'
              fetch(url2, {
                method:'POST',
                headers:{
                  'Content-type': 'application/json',
                },
          
                body:JSON.stringify(i)
              })
              
              this.handleReset()

            }
    
            handleReset = () => {
                Array.from(document.querySelectorAll("input")).forEach(
                  input => (input.value = "")
                );
                this.setState({
                    name:[{}],
                    price:[{}],
                    qty:[{}],
                    admin_id:[{}],
                    model:[{}],
                });
            };
        

    render() {

        return(
            <div>

            <div style={{width: "100%"}}>

            <h2 style={{color:"#7abfc4"}}>Add Inventory Items</h2>

                <div className="form-group" style={{fontSize:"15px", color:" #749DAD", width:"100%", marginTop:"2%"}}>
                
                <form onSubmit={this.handleSubmit} >
                    
              
     
                <div className="form-row">

                <div className="col" >
               Item Name
                        <input type="text" className="form-control" onChange= {this.formData} name="name" placeholder="Item Name" required></input>
              
                </div>
       

                <div className="col" >
                    Price
                        <input type="text" className="form-control" onChange= {this.formData} name="price" placeholder="Item Price" required></input>                
                </div> </div>

                <div className="form-row">
                <div className="col" >
                    Quantity
                        <input type="text" className="form-control" onChange= {this.formData} name="qty" placeholder="Quantity" required></input>
                </div>

                
                <div className="col" >
                    Admin
                    <select onChange= {this.formData} name="admin_id" class="form-control" style={{marginTop:"10px"}} required>
                    <option selected>Choose Admin...</option>
                      {this.state.admins.map((a) => {
                        /* const adminId = a.id;
                        const adminName = a.username; */
                        return <option value={a.id}>{a.username}</option>;
                      })}
                    </select></div>

                    </div>
         
                 {/*    Upload Image |
                        <input type="file" style={{marginTop:"15px", marginBottom:"15px"}}></input>

                    <br></br> */}

                    

                    <div className="form-row">
                    Model
                        <input type="text" className="form-control" onChange= {this.formData} name="model" placeholder="Model" required></input>
                    </div>

                    <div className="form-row">
                    <div className="col" >
                    <div className="radio">
                    Condition | New <input type="radio"  onChange={this.formData} name="condition" value="New"/>
                                 Used <input type="radio"  onChange={this.formData} name="condition" value="Used" />
                    </div></div>
                 

                    <div >
                    
                    <div className="col" >
                    Availability  | Available <input type="radio"  onChange={this.formData} name="availability" value="Available"/>
                    Unavailable <input type="radio"  onChange={this.formData} name="availability" value="Unavailable" />
                    </div></div></div>
                   
                   <Button type="submit" size="md" variant="info" style={{width:"80%", borderRadius:"15px", marginLeft:"10%", marginTop:"3%"}}>Add Equipment</Button>
                  
                   
                </form>
                


                
            
            </div>

               {/* <img src={image} style={{width:"250px", marginLeft:"30%"}}></img> */}
        

            </div>
            
            </div>
        )
    }
}
