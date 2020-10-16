import React, { Component } from 'react'
import { Button } from "react-bootstrap";

class BookTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tik: [],
            name:"",
            price:"",
            is_clicked:false,
            cancel_is_clicked:true,
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
              {/* {this.state.tik.map((tik) => { */}
                {/* return ( */}
                  <tr>
{/*                     <td>{tik.ticket_id}</td>
                    <td>{tik.tkt_name}</td>
                    <td>{tik.tkt_type}</td>
                    <td>{tik.price}</td> */}
                    <td>ID</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Type</td>
                    <td>
                      <Button 
                        disabled={this.state.is_clicked}
                        type="button"
                        class="btn btn-primary"
                        onClick={this.setButtonStatus}
                      //  data-toggle="modal"
                       // data-target="#exampleModalCenter"
                      >
                        Book
                      </Button>
                    </td>
                    <td>
                      <Button
                        disabled={this.state.cancel_is_clicked}
                        type="button"
                       
                        className="btn btn-danger"
                      >
                        Cancel
                      </Button>
                    </td>
                  </tr>
                {/* ); */}
              {/* })} */}
            </tbody>
          </table>
        </div>
         );
    }
}
 
export default BookTable;