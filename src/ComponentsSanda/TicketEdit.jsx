import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./cssSanda/editTicket.css";
import axios from 'axios'

class TicketEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tik:[],
    };
  }

  componentDidMount(){
    this.fetchTkt();
  }

   fetchTkt = () =>{
    axios.get("http://127.0.0.1:8000/tickets/").then(res=>{
      const tik = res.data;
      this.setState({tik});
    })
   }


  render() {
    return (
      <div>
        <div className="table-responsive">
          <table className="table">
            <thead className="thead">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tik.map(tik =>{
                return(
                  <tr>
                  <td>{tik.ticket_id}</td>
                  <td>{tik.tkt_name}</td>
                  <td>{tik.tkt_type}</td>
                  <td>{tik.status}</td>
                  <td>{tik.price}</td>
                  <td>
                    <Button type="button">Edit</Button>
                  </td>
                  <td>
                    <Button type="button" className="btn btn-danger">
                      Delete
                    </Button>
                  </td>
                </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TicketEdit;
