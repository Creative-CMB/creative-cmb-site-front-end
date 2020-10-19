import React, { Component } from 'react'
import { Button } from "react-bootstrap";
import ResForm from './ResForm'

import check from "./img/checking.png";

class BookTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            is_clicked:false,
            cancel_is_clicked:true,
            book:[],
            // reservation_id:"",
            batch_ticket_id:"",
            ticket_name:"",
           // event_id:"EVT39PEjsh",
           // cus_id:"",
           // date:"",
           // status:"reserved",
         }
    }

    setButtonStatus=()=>{
      this.setState({is_clicked:true})
      console.log(this.state.is_clicked)

      if(this.state.is_clicked){
        console.log("clicked")
      }

      this.setCancelButton()
    }

    setCancelButton=()=>{
      if(this.state.is_clicked){
        this.setState({cancel_is_clicked:true})
        console.log("cancel clicked")
      }
      
      if(this.state.is_clicked==false){
        this.setState({cancel_is_clicked:false})
      }
    }

    componentDidMount = () => {
      this.fetchBookingList()
    }

    fetchBookingList = () => {
      fetch('http://127.0.0.1:8000/displayentries/')
        .then(response => response.json())
        .then(data => 
          this.setState({
            book:data
          }) 
          )
      console.log("Booking",this.state.book.ticket_price)
    }


    getBookingDetails = (bticketID,ticketName) => {
      console.log('test id', bticketID)
      this.setState({
        batch_ticket_id:bticketID,
        ticket_name:ticketName,
      })


      console.log("blasss",this.state.batch_ticket_id)
    }


    render() { 
        return ( 
        <div className="table-responsive">
          <table className="table">
            <thead style={{width: "100%",background:"linear-gradient(to bottom, #00cc99 0%, #006699 100%)",
            }}>
              <tr >
                <th>Batch Ticket ID</th>
                <th>Ticket Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Book</th>
                <th>Cancel </th>
              </tr>
            </thead>
             <tbody>
               {this.state.book.map((blist) => { 
                 return ( 
                  <tr>
                    <td>{blist.batch_ticket_id}</td>
                   <td>{blist.ticket_name}</td>
                    <td>{blist.ticket_type}</td>
                    <td>{blist.ticket_price}</td> 
                    <td>
                      <Button 
                        /* disabled={this.state.is_clicked} */
                        type="button"
                        class="btn btn-primary"
                        /* onClick={this.setButtonStatus} */
                        onClick={()=>this.getBookingDetails(blist.batch_ticket_id,blist.ticket_name)}
                      >
                        Book
                      </Button>
                    </td>
                    <td>
                      <Button
                        /* disabled={this.state.cancel_is_clicked} */
                        type="button"
                       
                        className="btn btn-danger"
                      >
                        Cancel
                      </Button>
                    </td>
                  </tr>
                 ); 
               })} 
            </tbody>
          </table>

              <div className="row" style={{marginLeft:"10px",marginTop:"80px"}}>
                <h1 style={{textAlign:"left", color:"#000066", textShadow:"2px 2px 5px #000066" ,fontFamily:"Times New Roman"}}>Booked Tickets</h1>
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <ResForm  
                  bticketID = {this.state.batch_ticket_id}
                  tName = {this.state.ticket_name} />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                  <img className="d-block w-100" src={check} alt="Third slide" style={{height:"100%"}}/>
                  </div>
              </div>
          </div>

         );
    }
}
 
export default BookTable;