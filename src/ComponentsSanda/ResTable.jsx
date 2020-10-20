import React, { Component } from "react";

import { Button } from "react-bootstrap";

class ResTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resList:[]
    };
  }

  //to fetch the ticket reserved by a particular customer
  componentDidMount = () => {
    this.fetchResTickList()
  }

  //fetch url
  fetchResTickList = () => {
    fetch('http://127.0.0.1:8000/reservation-by-id/' +"USR4567qwe" + '/')
      .then(response => response.json())
      .then(data => 
        this.setState({
          resList:data
        }) 
        )
    
  }


 render() {
    return (
      <div>
        <div className="table-responsive" style={{margingTop:"30px"}}>
          <table className="table">
            <thead style={{width: "100%",background:"linear-gradient(to bottom, #00cc99 0%, #006699 100%)",
            }}>
              <tr >
                <th style={{color:"white" , fontFamily:"Times New Roman", fontSize:"20px"}}>Reservation ID</th>
                <th style={{color:"white" , fontFamily:"Times New Roman", fontSize:"20px"}}>Batch Ticket ID</th>
                <th style={{color:"white" , fontFamily:"Times New Roman", fontSize:"20px"}}>Event ID</th>
                <th style={{color:"white" , fontFamily:"Times New Roman", fontSize:"20px"}}>Date </th>
              </tr>
            </thead>
             <tbody>
               {this.state.resList.map((resDetails) => { 
                 return ( 
                  <tr>
                    <td>{resDetails.reservation_id}</td>
                   <td>{resDetails.batch_ticket_id}</td>
                    <td>{resDetails.event_id}</td>
                    {/* <td>{resDetails.cus_id}</td>  */}
                    <td>{resDetails.date}</td> 
     
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

export default ResTable;
