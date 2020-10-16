import React, { Component } from 'react'
import { Button } from "react-bootstrap";

class BookTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tik: [],
            name:"",
            price:"",
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
                        type="button"
                        class="btn btn-primary"
                       // onClick={()=>this.editMode(tik.ticket_id)}
                      //  data-toggle="modal"
                       // data-target="#exampleModalCenter"
                      >
                        Book
                      </Button>
                    </td>
                    <td>
                      <Button
                        type="submit"
                      //  onClick={() => this.confirmDelete(tik)}
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