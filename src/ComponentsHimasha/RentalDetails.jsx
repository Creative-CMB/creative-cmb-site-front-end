import React, { Component } from 'react'

export default class RentalDetails extends Component {
    
    state = {
        rentalDetails: []
    }

    componentDidMount() {
        this.fetchRentalDetails()
    }
    
    fetchRentalDetails() {
        fetch('http://127.0.0.1:8000/rentalDetails/')
        .then(response => response.json())
        .then(data =>
            this.setState({
                rentalDetails:data}))            
    }


    render() {
        return (
            <div>
                 <table>
                    <thead>
                        <tr >
                        <th></th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody  >
                        {this.state.rentalDetails.map((r_details) => {
                        const {rent_id, rental_date, rental_period, status, price, qty, customer_id} = r_details
                        return (
                        <tr  >
                            <td> {rent_id} </td>
                            <td> {rental_date} </td>
                            <td> {rental_period} </td>
                            <td> {status} </td>
                            <td> {price} </td>
                            <td> {qty} </td>
                        </tr>
                    )
                })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
