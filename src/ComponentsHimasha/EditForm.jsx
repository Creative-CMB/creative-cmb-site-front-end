import React, { Component } from 'react'
//import image from "./images/agreement.png"

export default class EditForm extends Component {

    state = {
        name:'',
        price:'',
        qty:'',
    }

    formData = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    refreshPage() {
        window.location.reload(false);}

    handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        this.setState({
            name:[{}],
            price:[{}],
            qty:[{}],
        });
    };
        
    submitData = (e) => {
      e.preventDefault()

      const {eq_id, name, price, qty} = this.props.selectedItem
      
          const updatedItem = {
              name:this.state.name || name,
              price: this.state.price || price ,
              qty : this.state.qty || qty,
          }

          fetch( `http://127.0.0.1:8000/equipment-update/`+eq_id+ `/`, {
           
          method: 'PATCH',
           headers: {
                   'Content-Type': 'application/json',
           },
           
           body: JSON.stringify(updatedItem),
       }).then(res => console.log(res)).catch(err => console.log(err))
       console.log(updatedItem)

       this.refreshPage()
       //this.handleReset()
    }

 
    render() {     
        const {name, price, qty} = this.props.selectedItem
        return (
            <div>
            <form onSubmit={this.submitData}>
              <input type="text" name="name"  onChange={this.formData} defaultValue={name} />
              <input type="text" name="price" onChange={this.formData} defaultValue={price} />
              <input type="text" name="qty" onChange={this.formData}  defaultValue={qty} />
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save changes</button></div>
            </form>
        
           </div>
        )
    }
}
