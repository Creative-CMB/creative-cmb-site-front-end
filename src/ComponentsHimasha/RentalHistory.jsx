
import React, { Component } from 'react'
import jsPDF from "jspdf"
import "jspdf-autotable"
import { format } from "date-fns"

export default class RentalHistory extends Component {

    state = {
        rental_history:[],
        oldDate: new Date().getDate(),
        currentDate: new Date().getDate(),
        clicked:false,

        status:'',

    }

    

     componentDidMount() {
        this.fecthRentalHistory()
    }
    
    fecthRentalHistory() {
        fetch('http://127.0.0.1:8000/rentalDetailsById/himasha/')
        .then(response => response.json())
        .then(data =>
            this.setState({
                rental_history:data}))            
    }

    generatePDF = (rental_data) => {
        //initilize the pds
        const doc = new jsPDF();
    
        //column definition
        const tableColumns = ["Rented Date", "Period", "Quantity", "Returned Status", "Total Price"];
        const tableRows = [];
    
        const rowdata = [
          rental_data.rental_date,
          rental_data.rental_period,
          rental_data.qty,
          rental_data.status,
          rental_data.price,
        ];
    
        tableRows.push(rowdata);
    
        doc.autoTable(tableColumns, tableRows, { startY: 20 });
        const date = Date().split(" ");
        //the filename will be the current systems date
        const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
        doc.text('Creative CMB ~ Rental Invoice' , 14, 15);
        doc.save(`report_${dateStr}.pdf`);
    
      }

    render() {

       

        const popover = (
            <Popover id="popover-basic">
              <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
              </Popover.Content>
            </Popover>
          );
          
      const alert = (
        <Alert
        message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warning"
        closable
        onClose={this.onClose}></Alert>
      
      )
        return (
            
            <div>
                
                <table table className= "table table-hover" >
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.rental_history.map((r_history) => {
                        const {rental_date, rental_period, status, price, qty} = r_history
                        return (
                        <tr  >
                            <td> {rental_date} </td>
                            <td> {rental_period} </td>
                            <td> {status} </td>
                            <td> {price} </td>
                            <td> {qty} </td>
                            <td> <button type="button" onClick={()=> this.generatePDF(r_history)}>generate Invoice</button> </td>
                        </tr>
                        )})}
                    </tbody>
                </table>

                <button type="submit" className="btn btn-primary" onClick={() => this.checkIfClicked(test)} >book</button>
                <button type="submit" className="btn btn-danger" >cancel</button>


            

            </div>
        )
    }
}
