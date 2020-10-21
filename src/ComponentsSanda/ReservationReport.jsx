import React, { Component } from 'react'
import TktNavBar from './TktNavBar';

import imgwelcome from "./img/welcome.png";


class ReservationReport extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            adminRes:[]
         }
    }


    componentDidMount = () => {
        this.fetchReservationListForAdmin()
      }
  
      fetchReservationListForAdmin = () => {
        fetch('http://127.0.0.1:8000/resTicket-list/')
          .then(response => response.json())
          .then(data => 
            this.setState({
                adminRes:data
            }) 
            )
      }

    render() { 
        return ( <div>
            <div className="row">
            <TktNavBar link1="Home" link2="Ticket-Details" link3="Reservation-Details" />

            </div>

            <div className="row" style={{ padding: "10px", marginTop: "30px" }}>
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">

            <div className="row">
                <div  className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <button style={{marginLeft:"10px" ,backgroundColor:"blue", padding:"5px 16px", borderRadius:"10px", color:"white", border:"none"}}>Search</button>
                </div>
                <div  className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <button style={{backgroundColor:"red", padding:"5px 16px", borderRadius:"10px", color:"white", border:"none"}}>Report PDF</button>
                </div>
                
            </div>
         
          </div>

          <div
            className="col-lg-4 col-md-12 col-sm-12 col-xs-12"
            style={{ textAlign: "center" }}
          >
             {/* <img className="d-block w-100" src={imgwelcome} alt="Third slide" style={{height:"40%" , width:"40%"}}/>  */}
          </div>
        </div>


            <div className="row" style={{marginLeft:"10px", marginTop:"20px"}}> 
            <div className="table-responsive">
            <table className="table">
            <thead style={{  background: "linear-gradient(to bottom, #00ccff 0%, #99ff66 100%)"}}>
              <tr>
                <th>Reservation ID</th>
                <th>Batch Ticket ID</th>
                <th>Event ID</th>
                <th>Customer ID</th>
                <th>Reserved Date</th>
                {/* <th>Quantity</th> */}

              </tr>
            </thead>
            <tbody>
               {this.state.adminRes.map((adminResDetails) => { 
                 return ( 
                  <tr>
                    <td>{adminResDetails.reservation_id}</td>
                   <td>{adminResDetails.batch_ticket_id}</td>
                    <td>{adminResDetails.event_id}</td>
                    <td>{adminResDetails.cus_id}</td> 
                    <td>{adminResDetails.date}</td> 
     
                  </tr>
                 ); 
               })} 
            </tbody>
            </table>
            </div>

            </div>


        </div> );
    }
}
 
export default ReservationReport;