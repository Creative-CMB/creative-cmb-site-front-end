import React, { Component } from "react";
import { Button } from "react-bootstrap";
import UpdateTicket from "./UpdateTicket";
import TicketForm from "./TicketForm";

import axios from "axios";

class TicketEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tik: [],
      selectedTicket:{},
      editMode: false,
      name:"",
      price:"",
      quantity:"",
      type:"",
      data:"",
      temp:"",
      status:""
    };
  }

  componentDidMount() {
    this.fetchTkt();
  }

  fetchTkt = () => {
    axios.get("http://127.0.0.1:8000/tickets/").then((res) => {
      const tik = res.data;
      this.setState({ tik });
    });
  };

  /*   deleteTicket(tik) {
    var url = "http://127.0.0.1:8000/ticket-delete/" + tik.ticket_id + "/";
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        this.fetchTkt();
      })
      .catch((err) => console.log(err));
  } */

  editTicket(tik) {
    console.log("new Ticket id:", tik.ticket_id);
    var url = "http://127.0.0.1:8000/ticket-update/" + tik.ticket_id + "/";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(tik),
    })
      .then((response) => response.json())
      .then((tik) => {
        const newTik = this.state.tik.map((tikItem) => {
          if (tikItem.ticket_id == tik.ticket_id) {
            return Object.assign({}, tik);
          } else {
            return tikItem;
          }
        });
        this.setState({ tik: newTik });
        console.log("object", tik);
      });
  }

  confirmDelete(tik) {
    if (window.confirm("Confirm Deletion")) {
      var url = "http://127.0.0.1:8000/ticket-delete/" + tik.ticket_id + "/";
      fetch(url, {
        //credentials:'include',
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => {
          this.fetchTkt();
        })
        .catch((err) => console.log(err));
    } else {
      console.log("cancel");
    }
  }

  
  editMode = (tik) => {
    this.setState({ editMode: true });
    //this.handleUpdate(tik);
    this.passID(tik);
    console.log("edit mode in ticket: ", tik);
    this.state.tik.filter((item)=>item.ticket_id===tik).map((filteredItem)=>this.setState({selectedTicket:filteredItem}))
    //console.log(this.state.selectedTicket)
  };

  passID = (tik) => {
    if (this.state.editMode) {
      console.log("true");
     // console.log("edit:", tik.ticket_id);
    }
  };

  handleSubmit=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

updateData = (e) => {
    e.preventDefault();

    const {tkt_name,tkt_type,price,no_of_tickets} = this.state.selectedTicket

    const tktUpdateData = {
     /*    ticket_id:this.state.selectedTicket.ticket_id,
        event_id:this.state.selectedTicket.event_id,
        admin_id:this.state.selectedTicket.admin_id, */
        tkt_name: this.state.name || tkt_name,
        // status:this.state.selectedTicket.status,
        tkt_type: this.state.type || tkt_type,
        price: this.state.price || price,
       // expiration_date:this.state.selectedTicket.expiration_date,
      //  image:"kfjfjksdbkjsd",
        no_of_tickets: this.state.quantity || no_of_tickets,

    };

    console.log(tktUpdateData);

    var url= "http://127.0.0.1:8000/ticket-update/" + this.state.selectedTicket.ticket_id + "/"


    fetch(url,{
      method:"PATCH",
      headers:{
        "Content-type":"application/json"
      },

      body:JSON.stringify(tktUpdateData)

    }).then(response=>this.setState({status:response.status})).catch(err=>console.log(err))


    if(this.state.status=="200"){
      this.fetchTkt()

      window.location.reload(true)
    }
}

  render() {
    return (
      <div>
        <div className="table-responsive">
          <table className="table">
            <thead style={{background:"linear-gradient(to bottom, #00cc99 0%, #006699 100%)"}}>
              <tr>
                <th style={{fontFamily:"Times New Roman", fontSize:"18px"}}>ID</th>
                <th style={{fontFamily:"Times New Roman", fontSize:"18px"}}>Name</th>
                <th style={{fontFamily:"Times New Roman", fontSize:"18px"}}>Type</th>
                {/* <th>Status</th> */}
                <th style={{fontFamily:"Times New Roman", fontSize:"18px"}}>Price</th>
                <th style={{fontFamily:"Times New Roman", fontSize:"18px"}}>Expiration Date</th>
                <th style={{fontFamily:"Times New Roman", fontSize:"18px"}}>Quantity</th>
                <th style={{fontFamily:"Times New Roman", fontSize:"18px"}}>Edit</th>
                <th style={{fontFamily:"Times New Roman", fontSize:"18px"}}>Delete </th>
              </tr>
            </thead>
            <tbody>
              {this.state.tik.map((tik) => {
                return (
                  <tr>
                    <td>{tik.ticket_id}</td>
                    <td>{tik.tkt_name}</td>
                    <td>{tik.tkt_type}</td>
                     {/* <td>{tik.status}</td>  */}
                    <td>{tik.price}</td>
                    <td>{tik.expiration_date}</td>
                    <td>{tik.no_of_tickets}</td>
                    <td>
                      <Button type="button" class="btn btn-primary"
                      onClick={()=>this.editMode(tik.ticket_id)} 
                      data-toggle="modal" data-target="#exampleModalCenter">
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        type="submit"
                        onClick={() => this.confirmDelete(tik)}
                        className="btn btn-danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Update Ticket
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={()=>{
                    window.location.reload(true)
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">{this.passID()}
              
              {/*ticket update form */}
              <form onSubmit={this.updateData}>

              <div className="row">
                  <div className="col-4">
                    <label for="fname" style={{fontSize:"18px"}}>Ticket Name:</label>
                  </div>
                  <div className="col-5">
                    <input type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedTicket.tkt_name} name="name" id=""/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-4">
                    <label for="fname" style={{fontSize:"18px"}}>Ticket Type:</label>
                  </div>
                  <div className="col-5">
                  <input type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedTicket.tkt_type} name="type" id=""/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-4">
                    <label for="fname" style={{fontSize:"18px"}}>Ticket Price:</label>
                  </div>
                  <div className="col-5">
                  <input type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedTicket.price} name="price" id=""/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-4">
                    <label for="fname" style={{fontSize:"18px"}}>Ticket Quantity:</label>
                  </div>
                  <div className="col-5">
                  <input type="text" onChange={this.handleSubmit.bind(this)} defaultValue={this.state.selectedTicket.no_of_tickets} name="quantity" id=""/>
                  </div>
              </div>

                <button type="submit" class="btn btn-primary"  style={{display:"inline-block"}}>
                  Save changes
                </button>
                                
                <button
                  style={{display:"inline-block"}}
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  style={{backgroundColor:"red", marginLeft:"50px"}}
                >
                  Close
                </button>
          

                </form>
              </div>
              <div class="modal-footer">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TicketEdit;
