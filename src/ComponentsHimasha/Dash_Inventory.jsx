import React, { Component } from 'react' 
import AddItems from './AddItems'
import InventoryItems from './InventoryItems'

export default class Dash_Inventory extends Component {
    render() {
        return (
            <div>
                <AddItems />

                <InventoryItems />
            </div>
        )
    }
}
