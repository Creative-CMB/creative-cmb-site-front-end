import React, { Component } from 'react'

//import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
//import img from './images/doc.jpg'
import EventFooter from '../ComponentsAkila/EventFooter'
import EditForm from './EditForm'

//import * as Scroll from 'react-scroll';
//import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//import { get } from 'jquery';


export default class InventoryItems extends Component {

    constructor(){
        super()
        this.state = {
            equipment: [],
            inventory:[],
            selectedItem:{},
            inEditMode: false
        }
        this.fetchDetails = this.fetchDetails.bind(this)
        this.deleteEquipment = this.deleteEquipment.bind(this)
    }
 
    componentDidMount(){
        this.fetchDetails();
      }

    /* scrollToBottom() {
      scroll.scrollToBottom();
  
    } */

    fetchDetails(){
        console.log('fetching data ...')
    
        fetch('http://127.0.0.1:8000/equipment-list/')
        .then(response => response.json())
        .then(data => 
          this.setState({
            equipment:data
          }) 
          )

        fetch('http://127.0.0.1:8000/listInventory/')
        .then(response => response.json())
        .then(data =>
          this.setState({inventory:data})
          )

      }

    deleteEquipment = (item) => {
          console.log(item.id)
          var url="http://127.0.0.1:8000/inventory-del/"+item.eq_id+"/"
        fetch(url, {
          method:'DELETE',
          headers:{
            'Content-type': 'application/json',
          }
        }).then((response) => {
            this.fetchDetails()
        }).catch(err=>console.log(err));
    }


    
    myFunction(item) {
        if (window.confirm("Confirm Deletion")) {
            console.log(item.id)
          var url="http://127.0.0.1:8000/inventory-del/"+item.eq_id+"/"
        fetch(url, {
          method:'DELETE',
          headers:{
            'Content-type': 'application/json',
          }
        }).then((response) => {
            this.fetchDetails()
        }).catch(err=>console.log(err));
        } else {
          console.log("canceled")
        }
      }

       enterEditMode = (item) => {
        console.log('in edit mode', item, item.eq_id)
        this.setState({selectedItem: item})
     
        console.log('stupid object', this.state.selectedItem)
        console.log('stupid name', this.state.selectedItem.name)
        
        this.setState({inEditMode: true});
      }

    
      leaveEditMode = () => {
        this.setState({inEditMode: false});
      }




    tableData() {
      return this.state.equipment.map((item) => {
          return (
             <tr>
                <td>{item.eq_id}</td>
                <td> {item.name} </td>
                <td> {item.price} </td>
                <td> {item.qty} </td>
                <td> {item.admin_id} </td>
                <td> <Button type="submit" data-toggle="modal" data-target="#exampleModal" size="sm" onClick={() => this.enterEditMode(item)}>Edit</Button></td>
                <td> <Button type="submit" size="sm" onClick={() => this.myFunction(item)} variant="dark" >Delete</Button> </td>
             </tr>
          )
       })
  }

    render() {


        return (
          <div>
            <div  className = "container" >
               
                <div className="row">
              
                <h2 style={{color:"#7abfc4", marginTop:"0%"}}>Inventory</h2>
                </div>
                <div >

                <div /* className="table-wrapper-scroll-y my-custom-scrollbar" */>
                <table className= "table table-hover">
                    <thead style={{backgroundColor:"#7abfc4", color:"white"}}>
                        <tr>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th>Price (Rs.)</th>
                        <th>Quantity</th>
                        <th>Admin</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                      
                      {this.tableData()}
                      
                       
                        
                        
                    </tbody>
                </table>
                
                </div>

                <div>
               
        
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
            
                      <EditForm  selectedItem = {this.state.selectedItem} />
                    </div>
                  {/*   <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div> */}
                  </div>
                </div>
                </div>
                </div>


              <div className='row'>
                <EventFooter />
              </div>
          

            </div>

            
</div>
           
        )
    }
}
