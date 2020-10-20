import React, { Component } from 'react'
import EquipmentRental from './EquipmentRental'
import 'antd/dist/antd.css';
import {Button, notification ,message} from 'antd';

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
        status:false,

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

        if(this.state.status == false){
            fetch('http://127.0.0.1:8000/rental-by-id/admin6/')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    selectedItems:data}))
        }
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
        //event.preventDefault()
        const {name, quantity, price, eqp_id} = this.state
        const select_rentItem = {
            rent_equipment_id: 'REID' + cryptoRandomString({ length:5 }),
            name: name,
            quantity: quantity,
            price: price,
            customer_id:'admin6',
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
        
        var lenth = this.state.selectedItems.length
        console.log('array length: ', lenth)
        
        this.handleReset()
    } 

    submitData = (e) => {
        e.preventDefault()

        const {quantity} = this.state

        if(this.state.selectedItems.length + 1 <= 7){
            
            if(!quantity || isNaN(quantity)){
                message.error({content: 'Please Enter Quantity',
                className: 'custom-class',
                style: {
                marginTop: '20vh',
                marginLeft: '100vh',
                },}, 1); 

            }else if(quantity <= 0){
                message.error({content: 'Quantity should be positive',
                className: 'custom-class',
                style: {
                marginTop: '20vh',
                marginLeft: '100vh',
                },}, 1); 

            }else if(quantity >= 20){
                message.error({content: 'Quantity should be positive',
                className: 'custom-class',
                style: {
                marginTop: '20vh',
                marginLeft: '100vh',
                },}, 1); 
            }

            else{this.addEquipments()}

        }else{
            {this.openNotificationWithIcon('warning')}
        }
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


    render(){
        return(
                <div className="row">
                <div className="col-md-12"  >
                    <h2>Please Rent Equipment! :(</h2>
                       
                    <div className="card text-center"  style={{width:"95%",marginLeft:"3%", marginTop:"30px" }}>
                    <div className="card-body">
                <table className= "table table-hover table-borderless"  style={{width:"100%"}}>
                    <thead>
                        <tr >
                            <th> ID </th>
                            <th> NAME </th>
                            <th> PRICE </th>
                            <th> CONDITION </th>
                            <th> MODEL </th>
                            <th> QUANTITY </th>
                            
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
                            <td> <input type="number" name="quantity" className="form-control input-sm" style={{width:"90px"}}
                                    onChange={this.getQuantity.bind(this, price, eq_id, name)}/></td>
                            <td> <form onSubmit={this.submitData}>
                                    <button type="submit" className="btn btn-primary btn-sm">Select Item</button>
                                </form></td>
                        </tr>
                    )
                })
                    }
                    </tbody>
                </table></div></div>

                {/* <div>
                <Button type="button" onClick={this.scrollToBottom}>Rent Equipment</Button>
                </div> */}

                </div>

               <div className="row mt-" >
                <EquipmentRental 
                selected_item = {this.state.selectedItems} 
                deleteRental = {this.deleteRental} /></div>



                
                
                </div>
           
        )
    }
    
  /*   openNotification = () => {
        const args = {
          message: 'Notification Title',
          description:
            'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
          duration: 0,
        };
        notification.open(args);
      }; */

       openNotificationWithIcon = type => {
        notification[type]({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      };
}
