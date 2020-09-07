import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./cssSanda/editTicket.css";

class TicketEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ticket: [
        {
          id: 1,
          name: "ticket1",
          type: "vip",
          quantity: 5,
          price: 1000,
        },
        {
          id: 2,
          name: "ticket2",
          type: "vip",
          quantity: 5,
          price: 1000,
        },
        {
          id: 3,
          name: "ticket3",
          type: "vip",
          quantity: 5,
          price: 1000,
        },
      ],
    };
  }

  tableData() {
    return this.state.Ticket.map((data) => {
      return (
        <div>
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.quantity}</td>
            <td>{data.price}</td>
            <td>
              <Button type="button">Edit</Button>
            </td>
            <td>
              <Button type="button" className="btn btn-danger">
                Delete
              </Button>
            </td>
          </tr>
        </div>
      );
    });
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
            <tbody>{this.tableData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TicketEdit;
