import React, { Component } from 'react'
import AddItems from './AddItems'

export default class InventoryItems extends Component {

    constructor(){
        super()
        this.state = {
            inventoryItem: [
                {
                    inventoryItemID:1,
                    name:'meh',
                    model:'sdi',
                    price:2000.00,
                    condition:false,
                    availability:true
                },
                {
                    inventoryItemID:2,
                    name:'meh',
                    model:'sdi',
                    price:2000.00,
                    condition:false,
                    availability:true
                }    
                    
                    
                    
            ]
        }
    }

    handleCondition = (event) => {
        const condition_event = event.target.checked
        console.log(condition_event)
        console.log('hi')

        /* this.setState({
                condition : condition_event
            }); */

        
    }

   /*  abc = (condition) => {
        if(condition == true){
            return 'New';
        }
        else{
            return 'Used';
        }
    }

    handleAvailability = () => {
        this.setState({
                availability : !this.state.inventoryItem.availability
            });

        console.log(this.state.inventoryItem.availability)
    }

    */


    render() {

        

        return (
            <div>
                <AddItems handleCondition = {this.state.inventoryItem.inventoryItemID} />
        

                {/* <h3> Item Code: {this.state.inventoryItemID} </h3>
                <h3>Item Name: {this.state.name} </h3>
                <h3>Model: {this.state.model} </h3>
                <h3>Price: {this.state.price} </h3>
                <h3>Condition: <input type="checkbox" onChange= {this.handleCondition.bind(this)} ></input>{this.abc(this.state.condition)}  </h3>
                <h3> Availability: <input type="checkbox" onChange=  {this.handleAvailability.bind(this)} ></input>    </h3> */}

              
                 {/*  {this.state.inventoryItem.map((item) => 
                  <div>
                     <ul>
                            <li> Item Code: {item.inventoryItemID} </li>
                            <li>Item Name: {item.name} </li>
                            <li>Model: {item.model} </li>
                            <li>Price: {item.price} </li>
                            <li>Condition: <input type="checkbox" onChange= {this.handleCondition.bind(this)} ></input>{this.abc(item.condition)} </li>
                            <li> Availability: <input type="checkbox" onChange=  {this.handleAvailability.bind(this)} ></input></li>  
                    </ul>
                  </div>
                  )
                  } */}

            </div>
        )
    }
}
