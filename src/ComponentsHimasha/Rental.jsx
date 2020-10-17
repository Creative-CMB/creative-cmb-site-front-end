import React, { Component } from 'react'
import EquipmentRental from './EquipmentRental'

const cryptoRandomString  = require("crypto-random-string");

export default class Rental extends Component {

    state = {
        equipments:[],
        selectedItems: [],
        name:'',
        quantity:'',
        price:'',
        eqp_id:'',
        isChecked:false,
        checkedID:'',
    }

    componentDidMount() {
        this.fetchEquipments()
        this.fetchSelectedItems()
    }
    
    fetchEquipments() {
        console.log('fetching equipment data')
        fetch('http://127.0.0.1:8000/equipment-list/')
        .then(response => response.json())
        .then(data =>
            this.setState({
                equipments:data}))            
    }

    fetchSelectedItems(){
        console.log('fetching rental data')
        fetch('http://127.0.0.1:8000/rental-details/')
        .then(response => response.json())
        .then(data =>
            this.setState({
                selectedItems:data}))
    }

    deleteRental = (id) => {
        console.log(id)
        var url="http://127.0.0.1:8000/delete-rental/"+id+"/"
        fetch(url, {
            method:'DELETE',
            headers:{
            'Content-type': 'application/json',
            }
        }).then(() => {
            this.setState({selectedItems: this.state.selectedItems.filter(item => item.id !== id)})
        });
  }
    
    getQuantity = (p, id, name, event) => {
        const qty = event.target.value
        const item_price = p*qty
    
            this.setState({
                name: name,
                quantity: qty,
                price: item_price,
                eqp_id: id, })

        console.log('total price : ' + item_price)
        console.log( 'price:' + p, 'added item:'+ id, 'quantity:'+ qty, 'name'+ name)
        
    }

    handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
        this.setState({
          quantity: [{}]
        });
    };

    addEquipments = (event) => {
        event.preventDefault()
        
        const {name, quantity, price, eqp_id} = this.state
        const select_rentItem = {
            rent_equipment_id: 'REID' + cryptoRandomString({ length:5 }),
            name: name,
            quantity: quantity,
            price: price,
            equipment_id: eqp_id,
        }

        var url = 'http://127.0.0.1:8000/create-rental/'
        fetch(url, {
            method:'POST',
            headers:{
            'Content-type': 'application/json',
            },
            body:JSON.stringify(select_rentItem)
        }).then(response => response.json()).then(select_rentItem => {
            this.setState({selectedItems: this.state.selectedItems.concat([select_rentItem])});
        });

        console.log('selected Item :', select_rentItem)
        this.handleReset()
    } 

    
    deleteRental = (id) => {
        console.log(id)
        var url="http://127.0.0.1:8000/delete-rental/"+id+"/"
        fetch(url, {
            method:'DELETE',
            headers:{
            'Content-type': 'application/json',
            }
        }).then((response) => {
            this.fetchSelectedItems()
        }).catch(err=>console.log(err));
  }

  handleCheckedElements = (id, e) => {
      const check = e.target.checked
      this.setState({isChecked: check})
      if(this.state.isChecked){
          this.setState({checkedID: id})
          console.log('checked ids : ' , id)
      }
  }

    render(){
        return(
            <div className="container" >
                <div className="row"  >
                    <div className="col-md-12"  >
                <table className= "table table-hover" >
                    <thead style={{backgroundColor:"#7abfc4", color:"white"}} >
                        <tr >
                            <th> ID </th>
                            <th> Name </th>
                            <th> Price </th>
                            <th> Condition </th>
                            <th> Model </th>
                            <th> Quantity </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody  >
                        {this.state.equipments.map((item) => {
                        const {eq_id, name, price} = item
                        return (
                        <tr  >
                            <td> {eq_id} </td>
                            <td> {name} </td>
                            <td> {price} </td>
                            <td> null </td>
                            <td> null </td>
                            <td> <input type="number" name="quantity" 
                                    onChange={this.getQuantity.bind(this, price, eq_id, name)}/></td>
                            <td> <form onSubmit={this.addEquipments}>
                                    <input type="submit"></input>
                                </form></td>
                                <td> <input type="checkbox" onChange={this.handleCheckedElements.bind(this, eq_id) } ></input> </td>
                        </tr>
                    )
                })
                    }
                    </tbody>
                </table>
                </div>

               
                <EquipmentRental selected_item = {this.state.selectedItems} deleteRental = {this.deleteRental} />
                </div>
                
                </div>
           
        )
    }
    
}
