import React, { Component } from 'react' 
import AddItems from './AddItems'
import InventoryItems from './InventoryItems'
import NavBar from './NavBar'

export default class Dash_Inventory extends Component {
    render() {
        return (
            <div>
                <NavBar />

                

                <AddItems />

                <InventoryItems />
            </div>
        )
    }
}
