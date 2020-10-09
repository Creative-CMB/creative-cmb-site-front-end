import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

class EventEditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.image} />
            <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                        {this.props.txt}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
    }
}
 
export default EventEditCard;