import React, { Component } from 'react'

export default class EquipmentRental extends Component {

    state = {
        price:''
    }
    
    calTotalPrice = () => {
        var totalPrice = 0
     /*    this.setState({
               price: this.props.selected_item.map((item) => {
                 return item.price;
               })
          }); */
        console.log('perfume:', totalPrice)
    }

  delete = (id) => {
      this.props.deleteRental(id)
  }

    render() {
        return (
            <div>
                  <table className= "table table-hover">
                    <thead style={{backgroundColor:"#7ac4c0", color:"white"}}>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.selected_item.map((s_item => {
                        const{rent_equipment_id, name, price, quantity} = s_item
                        return (<tr>
                            <td> {rent_equipment_id} </td>
                            <td> {name} </td>
                            <td> {price} </td>
                            <td> {quantity} </td>
                            <td> <button type="submit">update</button> </td>
                            <td><button type="button" onClick = {() => this.delete(rent_equipment_id)} >delete</button> </td>
                        </tr>)
                    }))
                }
                    </tbody>
                </table>

                <form style = {{width: "50%"}}>
                    date<input type="date" name="" id=""/><br></br>
                    period <input type="text" name="" id=""/>
                    quantity <input type="text" value=""/>
                    price <input type="text" name="" readOnly={this.state.price} />
                </form>

                    {this.calTotalPrice()}
            </div>
        )
    }
}
