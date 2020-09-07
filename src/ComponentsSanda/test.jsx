import React, { Component } from "react";
import { TableHead, TableBody } from "@material-ui/core";
import "./cssSanda/editTicket.css";

export class test extends Component {
  // state = {};

  inputData2 = () => {
    this.setState({ radstatus: !this.state.radstatus });
    const a = this.state.ticket;
    console.log(a.radstatus);
  };

  constructor(props) {
    super(props);
    this.state = {
      ticket: [
        {
          tname: "tname1",
          type: "type1",
          price: "2000",
          radstatus: false,
          quant: "20",
        },
        {
          tname: "tname1",
          type: "type1",
          price: "2000",
          radstatus: false,
          quant: "20",
        },
        {
          tname: "tname1",
          type: "type1",
          price: "2000",
          radstatus: false,
          quant: "20",
        },
        {
          tname: "noodes lu",
          type: "type1",
          price: "2000",
          radstatus: false,
          quant: "20",
        },
      ],
    };
  }

  fetchData() {
    return this.state.ticket.map((tickets) => {
      return (
        <tr>
          <td> {tickets.tname} </td>
          <td> {tickets.type} </td>
          <td> {tickets.price} </td>
          <td>
            <input
              onChange={this.inputData2}
              type="radio"
              name="radstatus"
              id="radstatus"
            />{" "}
            {""}
            <input
              onChange={this.inputData2}
              type="radio"
              name="radstatus"
              id="radstatus1"
            />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table className="table">
          <TableHead className="thead">
            <tr>
              <th>Ticket Type</th>
              <th>Full</th>
              <th>Half</th>
              <th>eeheh</th>
            </tr>
          </TableHead>
          <TableBody>{this.fetchData()}</TableBody>
        </table>
      </div>
    );
  }
}

export default test;
