import React, { Component } from 'react'
import AddItems from './AddItems'

export default class RentalDetails extends Component {

    testing = () => {
        console.log("hi")
        return <h1>hiii</h1>
    }

    render() {
        return (
            <div>
                <AddItems test={this.testing.bind(this)} />
            </div>
        )
    }
}

