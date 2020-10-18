import { data } from 'jquery';
import React, { Component } from 'react'

class UpdateTicket extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"",
            price:"",
            quantity:"",
            type:"",
            data:"",
            temp:""

         }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({temp:nextProps.ticket_id})

    }

 /*    componentDidMount(){
        this.setState({data:this.props.data});
        console.log(this.props.data)
    }
 */
    handleSubmit=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    updateData = (e) => {
        e.preventDefault();

        console.log(this.state.data.data.ticket_id);
        const tktUpdateData = {
            tkt_name: this.state.name,
            tkt_type: this.state.type,
            price: this.state.price,
            no_of_tickets: this.state.quantity,

        };
    
        console.log(tktUpdateData);
    }

    render() { 
        
        return ( 
            <div>
                <h1>hiejegfegfgue</h1>
                <form onSubmit={this.updateData}>
                   <input type="text" onChange={this.handleSubmit.bind(this)} value={this.state.temp} name="name" id=""/>
                   <input type="text" onChange={this.handleSubmit.bind(this)} value={this.state.data.tkt_type} name="type" id=""/>
                   <input type="text" onChange={this.handleSubmit.bind(this)} value={this.state.data.price} name="price" id=""/>
                   <input type="text" onChange={this.handleSubmit.bind(this)} value={this.state.data.no_of_tickets} name="quantity" id=""/>

                <button type="submit" class="btn btn-primary">
                  Save changes
                </button>

                </form>
            </div>

         );
    }
}
 
export default UpdateTicket;