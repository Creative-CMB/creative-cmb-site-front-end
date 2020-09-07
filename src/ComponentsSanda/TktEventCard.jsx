import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import img4 from "./img/5.jpg";

class TktEventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //fetch the data []
  }
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img4} />
          <Card.Body>
            {/*  <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.des}</Card.Text> */}
            <Link to="/reservation" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: "#49DCFC",
                  border: "1px solid black",
                  borderRadius: "10px",
                  width: "100px",
                  padding: "5px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                TICKET
              </button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TktEventCard;
