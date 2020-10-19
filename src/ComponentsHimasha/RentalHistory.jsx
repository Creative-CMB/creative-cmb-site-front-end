import { DatePicker } from 'antd'
import React, { Component } from 'react'

export default class RentalHistory extends Component {

    state = {
        rental_history:[],
        oldDate: new Date().getDate(),
        currentDate: new Date().getDate()
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

    test = () => {
        var date1 = new Date('December 25, 2017 01:30:00');
        var date2 = new Date('June 18, 2016 02:30:00');

    
       
        if(date1.getTime() > date2.getTime()){
            console.log('ediedhdiehd')
        }
                
        var OneDay = new Date().getTime() + (1 * 24 * 60 * 60 * 1000)
        var yourDate = new Date('May 18, 2016 02:30:00')
                                     
        if (OneDay > yourDate) {
           console.log('hi working')
        }
        else if (OneDay < yourDate) {
            console.log('hi workrfrfring')
        }
    }

    help = (date) => {
        console.log('date',date)
    }

    render() {
        return (
            <div>
                {this.test()}
                <h1> {this.state.currentDate} </h1>
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
                            <td> <button type="button" onChange={()=> this.help(rental_date)}>help dude</button> </td>
                        </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        )
    }
}
